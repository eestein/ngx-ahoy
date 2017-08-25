import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { TokenResponseModel } from '../models/token-response.model';

const UserToken = "UserToken";
const UserInfo = "UserInfo";
const UserSecurityData = "UserSecurityData";

@Injectable()
export class SecurityStorage {
    constructor(
        private localStorageService: LocalStorageService
    ) { }

    /**
     * Salva o token do usuário logado
     * @param {TokenResponseModel} userToken token do usuário logado
     */
    saveUserToken(userToken: TokenResponseModel): void {
        this.localStorageService.set(UserToken, userToken);
    }

    /**
     * Obtém o token do usuário logado
     */
    getUserToken(): TokenResponseModel {
        return this.localStorageService.get<TokenResponseModel>(UserToken);
    }

    /**
     * Salva os dados de segurança do usuário
     * @param {T} userData Dados de segurança do usuário
     */
    saveUserSecurityData<T>(userData: T): void {
        this.localStorageService.set(UserSecurityData, userData);
    }

    /**
     * Obtém os dados de segurança do usuário
     */
    getUserSecurityData<T>(): T {
        return this.localStorageService.get<T>(UserSecurityData);
    }

    /**
     * Salva os dados do usuário logado
     * @param {T} data Dados do usuário logado
     */
    saveUserInfo<T>(data: T): void {
        this.localStorageService.set(UserInfo, data);
    }

    /**
     * Obtém os dados do usuário logado
     */
    getUserInfo<T>(): T {
        return this.localStorageService.get<T>(UserInfo);
    }

    /**
     * Salva um registro no banco local usando a chave informada
     * @param {T} data Dado a ser salvo
     * @param {string} key Chave do dado no banco local
     */
    save<T>(data: T, key: string): void {
        this.localStorageService.set(key, data);
    }

    /**
     * Obtém um registro no banco local usando a chave informada
     * @param key Chave do dado no banco local
     */
    get<T>(key: string): T {
        return this.localStorageService.get<T>(key);
    }

    /**
     * Apaga todos os registros do banco local
     */
    clear(): void {
        this.localStorageService.clearAll('');
    }
}