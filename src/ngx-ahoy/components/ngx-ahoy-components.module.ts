// Base
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 3rd party
import { SelectModule } from 'ng2-select';
import { LaddaModule } from 'angular2-ladda';
import { TextMaskModule } from 'angular2-text-mask';
import { CalendarModule } from 'angular-calendar';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Local modules
import { NgxAhoyDirectivesModule } from '../directives/ngx-ahoy-directives.module';
import { NgxAhoyPipesModule } from '../pipes/ngx-ahoy-pipes.module';

// Local components
import { AcDatepickerComponent } from './common/ac-datepicker/ac-datepicker.component';
import { AcLoadbuttonComponent } from './common/ac-loadbutton/ac-loadbutton.component';
import { AcPageheaderComponent } from './common/ac-pageheader/ac-pageheader.component';
import { AcTableComponent } from './common/ac-table/ac-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LaddaModule,
        SelectModule,
        NgxAhoyDirectivesModule,
        TextMaskModule,
        RouterModule,
        CalendarModule,
        NgxAhoyPipesModule,
        DatepickerModule,
        BsDropdownModule
    ],
    declarations: [
        AcDatepickerComponent,
        AcLoadbuttonComponent,
        AcPageheaderComponent,
        AcTableComponent
    ],
    exports: [
        AcDatepickerComponent,
        AcLoadbuttonComponent,
        AcPageheaderComponent,
        AcTableComponent
    ]
})
export class NgxAhoyComponentsModule { }
