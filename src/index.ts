import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';

import { NgxAhoyConfigModel } from './core/models/ngx-ahoy-config.model';

import { AlertService } from './core/services/alert.service';
import { ModalService } from './core/services/modal.service';
import { NotificationService } from './core/services/notification.service';
import { RequestService } from './core/services/request.service';

import { ServiceLocator } from './core/utils/service-locator';

export * from './components';
export * from './core';
export * from './directives';
export * from './pipes';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [],
    bootstrap: []
})
export class NgxAhoyModule {
    constructor(private injector: Injector) {
        ServiceLocator.injector = this.injector;
    }

    static forRoot(config: NgxAhoyConfigModel): ModuleWithProviders {
        return {
            ngModule: NgxAhoyModule,
            providers: [
                AlertService,
                ModalService,
                NotificationService,
                RequestService,
                { provide: 'config', useValue: NgxAhoyModule }
            ]
        };
    }
}
