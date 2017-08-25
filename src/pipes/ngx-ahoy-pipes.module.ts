import { NgModule } from '@angular/core';

import { WeekdayPipe } from './weekday.pipe';
import { CurrencyPipe } from './currency.pipe';
import { CnpjPipe } from './cnpj.pipe';
import { CpfPipe } from './cpf.pipe';

@NgModule({
    imports: [],
    exports: [
        CpfPipe,
        CnpjPipe,
        WeekdayPipe,
        CurrencyPipe
    ],
    declarations: [
        CpfPipe,
        CnpjPipe,
        WeekdayPipe,
        CurrencyPipe
    ]
})
export class NgxAhoyPipesModule { }