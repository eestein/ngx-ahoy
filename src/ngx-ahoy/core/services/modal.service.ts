import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BaseModalComponent } from '../abstractions/base-modal.component';

/**
 * Mostra modais ao usuário
 */
@Injectable()
export class ModalService {
    constructor(
        private modalService: BsModalService
    ) { }

    /**
     * Mostra um modal a partir de um componente
     * @param {typeof BaseModalComponent} modalComponent Componente do modal
     * @param {any} model Dados do modal
     */
    showFromComponent(modalComponent: any, model?: any): void {
        let modal = this.modalService.show(modalComponent);

        if (model) {
            let component = <BaseModalComponent>modal.content;

            component.model = model;
            component.afterModelLoad();
        }
    }
}