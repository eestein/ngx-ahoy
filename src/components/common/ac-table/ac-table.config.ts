import { BaseDataModel } from '../../../core/abstractions/base-data.model';
import { AcTableColumn } from './ac-table.column';
import { BaseCrudStore } from '../../../core/abstractions/base-crud.store';

export abstract class AcTableConfig<T extends BaseDataModel> {
    protected constructor(store: BaseCrudStore<T>) {
        this._store = store;
    }

    protected _store: BaseCrudStore<T>;
    protected _columns: AcTableColumn[];
    protected _pageSize: number = 10;
    protected _canCreate: boolean = true;
    protected _canDelete: boolean;
    protected _canEdit: boolean;
    protected _canSearch: boolean = true;

    get hasSearch(): boolean {
        return this._canSearch;
    }

    get hasCreate(): boolean {
        return this._canCreate;
    }

    get hasEdit(): boolean {
        return this._canEdit;
    }

    get hasDelete(): boolean {
        return this._canDelete;
    }

    get columns(): AcTableColumn[] {
        return this._columns;
    }

    get pageSize(): number {
        return this._pageSize;
    }

    get store(): BaseCrudStore<T> {
        return this._store;
    }
}