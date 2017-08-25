import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcFormValidationDirective } from './ac-form-validation.directive'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AcFormValidationDirective
    ],
    exports: [
        AcFormValidationDirective
    ]
})
export class NgxAhoyDirectivesModule { }
