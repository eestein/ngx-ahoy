import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TokenResponseModel } from '../models/token-response.model';
import { UrlParameterModel } from '../models/url-parameter.model';
import { SecurityStorage } from '../storages/security.storage';
import { AlertService } from './alert.service';
import { Globals } from '../utils/globals';
import { NgxAhoyConfigModel } from '../models/ngx-ahoy-config.model';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';

/**
 * Serviço gerenciador da comunicação com o servidor
 */
@Injectable()
export class RequestService {
    constructor(
        private http: Http,
        private securityStorage: SecurityStorage,
        private alertService: AlertService,
        private globals: Globals,
        @Inject('config') private config: NgxAhoyConfigModel
    ) { }

    /**
     * Cria uma requisição do tipo GET
     * @param {string} url URL de destino
     */
    makeGet<T>(url: string, ...params: UrlParameterModel[]): Observable<T> {
        return this.makeRequest<T>('get', this.getUrl(url, false, params));
    }

    /**
     * Cria uma requisição do tipo POST
     * @param {string} url URL de destino
     */
    makePost<T>(url: string, data?: Object): Observable<T> {
        return this.makeRequest<T>('post', this.getUrl(url), data);
    }

    /**
     * Cria uma requisição do tipo PUT
     * @param {string} url URL de destino
     */
    makePut<T>(url: string, data?: Object): Observable<T> {
        return this.makeRequest<T>('put', this.getUrl(url), data);
    }

    /**
     * Cria uma requisição do tipo DELETE
     * @param {string} url URL de destino
     */
    makeDelete(url: string): void {
        this.makeRequest('delete', this.getUrl(url));
    }

    /**
     * Cria uma requisição do tipo POST com arquivo
     * @param {string} url URL de destino
     */
    makeFilePost<T>(url: string, data?: Object): Observable<T> {
        return this.makeRequest<T>('post', this.getUrl(url), data, true);
    }

    /**
     * Loga um usuário no sistema e retorna o TOKEN
     * @param {string} username Nome de usuário
     * @param {string} password Senha
     */
    getToken(username: string, password: string): Observable<TokenResponseModel> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.getUrl('token', true),
            `username=${username}&password=${encodeURI(password)}&grant_type=password`, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                this.alertService.showAlert('Não foi possível entrar, favor verificar os dados e tentar novamente.');
                return Observable.empty();
            })
            .finally(() => {
                this.globals.setIsMakingRequest(false);
            });
    }

    private makeRequest<T>(type: string, url: string, data?: Object, hasFile: boolean = false): Observable<T> {
        let request: Observable<Response>;
        let bodyString = data != null ? JSON.stringify(data) : "";
        let headers = hasFile ? new Headers() : new Headers({ 'Content-Type': 'application/json' });
        let userToken = this.securityStorage.getUserToken();

        if (userToken && new Date(userToken.valid_until as any).getTime() >= new Date().getTime())
            headers.append('Authorization', `Bearer ${userToken.access_token}`);

        let options = new RequestOptions({ headers: headers });

        if (hasFile) {
            request = this.http.post(url, data, options);
        } else {
            switch (type) {
                case "get":
                    request = this.http.get(url, options);
                    break;
                case "post":
                    request = this.http.post(url, bodyString, options);
                    break;
                case "put":
                    request = this.http.put(url, bodyString, options);
                    break;
                case "delete":
                    request = this.http.delete(url, options);
                    break;
            }
        }

        return request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                // todo: log?

                if (error.status == 500) {
                    this.alertService.showError(error._body);
                } else if (error.status == 588) {
                    this.alertService.showAlert(error._body);
                }

                return Observable.empty();
                // return Observable.throw(error.statusText);
            })
            .finally(() => {
                this.globals.setIsMakingRequest(false);
            });
    }

    private getUrl(url: string, isBase: boolean = false, params: UrlParameterModel[] = []): string {
        let currentUrl: string = (isBase ? this.config.baseUrl : `${this.config.baseUrl}api/`) + url;
        let isFirstRun: boolean = true;

        if (params.length > 0) {
            for (let param of params) {
                if (isFirstRun) {
                    isFirstRun = false;
                    currentUrl += `?${param.key}=${param.value}`;
                } else {
                    currentUrl += `&${param.key}=${param.value}`;
                }
            }
        }

        return currentUrl;
    }
}
