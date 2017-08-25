import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { SweetAlertOptions } from 'sweetalert2'

/**
 * Gerencia alertas ao usuário
 */
@Injectable()
export class AlertService {
    /**
     * Mostra uma mensagem de alerta
     * @param {string} message Mensagem a ser exibida ao usuário
     * @param {string} [title] Título da mensagem
     */
    showAlert(message: string, title?: string): void {
        var opt: SweetAlertOptions = {};

        opt.type = 'warning';
        opt.text = message;
        opt.title = title || 'Alerta';

        swal(opt);
    }

    /**
     * Mostra uma mensagem de informação
     * @param {string} message Mensagem a ser exibida ao usuário
     * @param {string} [title] Título da mensagem
     */
    showInfo(message: string, title?: string): void {
        var opt: SweetAlertOptions = {};

        opt.type = 'info';
        opt.text = message;
        opt.title = title || 'Informação';

        swal(opt);
    }

    /**
     * Mostra uma mensagem de erro
     * @param {string} message Mensagem a ser exibida ao usuário
     * @param {string} [title] Título da mensagem
     */
    showError(message: string, title?: string): void {
        var opt: SweetAlertOptions = {};

        opt.type = 'error';
        opt.text = message;
        opt.title = title || 'Erro';

        swal(opt);
    }

    /**
     * Mostra uma mensagem de sucesso
     * @param {string} message Mensagem a ser exibida ao usuário
     * @param {string} [title] Título da mensagem
     * @param {any} [callback] Função que será executada caso o usuário 
     */
    showSuccess(message: string, title?: string, callback?: any): void {
        var opt: SweetAlertOptions = {};

        opt.type = 'success';
        opt.text = message;
        opt.title = title || 'Sucesso';

        swal(opt).then(function () { callback(); }).catch(e => { });
    }

    /**
     * Mostra uma mensagem solicitando a confirmação do usuário
     * @param {string} message Mensagem a ser exibida ao usuário
     * @param {string} [title] Título da mensagem
     * @param {any} [callback] Função que será executada caso o usuário 
     *  clique em Confirmar
     */
    showConfirm(message: string, title?: string, callback?: any): void {
        var opt: SweetAlertOptions = {};

        opt.type = 'warning';
        opt.text = message;
        opt.title = title || 'Confirmar';
        opt.showCancelButton = true;
        opt.cancelButtonText = 'Cancelar';
        opt.confirmButtonText = 'Sim';
        opt.allowEscapeKey = false;
        opt.allowOutsideClick = false;

        swal(opt).then(function () { callback(); }).catch(e => { });
    }
}