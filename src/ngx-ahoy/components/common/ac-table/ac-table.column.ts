import { AcTableColumnTypeEnum } from './ac-table.column-type.enum';

export class AcTableColumn {
    Name: string = '';
    Title: string = '';
    Type?: AcTableColumnTypeEnum = undefined;
}