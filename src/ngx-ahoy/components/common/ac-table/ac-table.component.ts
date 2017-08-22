import * as _ from 'lodash';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AcTableConfig } from './ac-table.config';
import { BaseDataModel } from '../../../core/abstractions/base-data.model';
import { AlertService } from '../../../core/services/alert.service';

@Component({
    selector: 'ac-table',
    templateUrl: './ac-table.component.html',
    styleUrls: ['./ac-table.component.css']
})
export class AcTableComponent<T extends BaseDataModel> implements OnInit {
    @Input() config: AcTableConfig<T>;
    @Input() searchTerm: string = '';
    emptyResult: boolean = false;
    isSearching: boolean = false;
    originalItems: T[];
    localItems: T[];
    pagedItems: T[];
    totalItems: number = 0;
    currentPage: number = 0;
    totalPages: number = 0;
    startPage: number = 0;
    endPage: number = 0;
    startIndex: number = 0;
    endIndex: number = 0;
    pages: number[] = [];

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.isSearching = true;
        this.config.store.search().subscribe(resp => {
            this.originalItems = resp;
            this.search();
            this.isSearching = false;
        });
    }

    /**
     * Pesquisa nos dados locais
     */
    search(): void {
        this.localItems = this.originalItems;
        this.emptyResult = false;

        if (!this.searchTerm || this.searchTerm.length < 1) {
            this.setPage();
            return;
        }

        this.localItems = _.filter(this.localItems, item => {
            return Object.keys(item).some(key => {
                if (_.includes(this.config.columns.map(c => c.Name), key) && item[key] && item[key].length > 0)
                    return item[key].toLowerCase().includes(this.searchTerm);
                else
                    return false;
            });
        });

        if (!this.localItems || this.localItems.length < 1) {
            this.emptyResult = true;
            return;
        }

        this.setPage();
    }

    /**
     * Adiciona um novo registro
     */
    add(): void {
        this.router.navigate(['../add'], { relativeTo: this.activatedRoute });
    }

    /**
     * Edita um registro
     * @param item Registro a ser alterado
     */
    edit(item: T): void {
        this.router.navigate(['../edit/' + item.Id], { relativeTo: this.activatedRoute });
    }

    /**
     * Remove um registro
     * @param item Registro a ser removido
     */
    remove(item: T): void {
        this.alertService.showConfirm('Deseja realmente remover este registro?', '', () => {
            this.config.store.remove([item.Id]).subscribe(resp => {
                _.remove(this.originalItems, i => i.Id == item.Id);
                _.remove(this.localItems, i => i.Id == item.Id);
                _.remove(this.pagedItems, i => i.Id == item.Id);
                this.alertService.showSuccess("Registro excluído!");
            });
        });
    }

    /**
     * Define a página atual, calculando e gerando as páginas
     * de acordo com a quantidade de itens
     * 
     * @param {number} newPage Página atual
     */
    setPage(newPage: number = 1): void {
        // calcula o total de páginas
        this.totalPages = Math.ceil(this.localItems.length / this.config.pageSize);

        if (newPage < 1 || newPage > this.totalPages)
            return;

        this.currentPage = newPage;

        if (this.totalPages <= 10) {
            // se até 10 páginas, mostra todas
            this.startPage = 1;
            this.endPage = this.totalPages;
        } else {
            // caso mais de 10, calcular páginas de início e fim
            if (this.currentPage <= 6) {
                this.startPage = 1;
                this.endPage = 10;
            } else if (this.currentPage + 4 >= this.totalPages) {
                this.startPage = this.totalPages - 9;
                this.endPage = this.totalPages;
            } else {
                this.startPage = this.currentPage - 5;
                this.endPage = this.currentPage + 4;
            }
        }

        // calcula os índices de início e fim
        this.startIndex = (this.currentPage - 1) * this.config.pageSize;
        this.endIndex = Math.min(this.startIndex + this.config.pageSize - 1, this.localItems.length - 1);

        // cria o vetor de páginas
        this.pages = _.range(this.startPage, this.endPage + 1);

        // atualiza os itens da página atual
        this.pagedItems = this.localItems.slice(this.startIndex, this.endIndex + 1);
    }
}
