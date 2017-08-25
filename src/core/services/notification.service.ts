import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

/**
 * Exibe notificações ao usuário
 */
@Injectable()
export class NotificationService {
    constructor(
        private toastrService: ToastrService
    ) { }

    /**
     * Mostra uma notificação de alerta
     * @param {string} message Notificação a ser exibida ao usuário
     * @param {string} [title] Título da notificação
     */
    showAlert(message: string, title?: string): void {
        this.toastrService.warning(message, title);
    }

    /**
     * Mostra uma notificação de informação
     * @param {string} message Notificação a ser exibida ao usuário
     * @param {string} [title] Título da notificação
     */
    showInfo(message: string, title?: string): void {
        this.toastrService.info(message, title);
    }

    /**
     * Mostra uma notificação de erro
     * @param {string} message Notificação a ser exibida ao usuário
     * @param {string} [title] Título da notificação
     */
    showError(message: string, title?: string): void {
        this.toastrService.error(message, title);
    }

    /**
     * Mostra uma notificação de sucesso
     * @param {string} message Notificação a ser exibida ao usuário
     * @param {string} [title] Título da notificação
     */
    showSuccess(message: string, title?: string): void {
        this.toastrService.success(message, title);
    }

    /**
     * Mostra uma notificação de espera
     * @param {string} message Notificação a ser exibida ao usuário
     * @param {string} [title] Título da notificação
     */
    showWait(message: string, title?: string): void {
        // this.toastrService.wait
    }
}
