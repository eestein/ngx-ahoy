import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Globals } from '../../../core/utils/globals';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'ac-load-button',
    templateUrl: './ac-load-button.component.html',
    styleUrls: ['./ac-load-button.component.css']
})
export class AcLoadbuttonComponent {
    @ViewChild('button') button: ElementRef;
    @Input() clickFn: any;
    @Input() text: string = '';
    @Input() classes: string = '';
    @Input() iconClass: string = '';
    @Input() form: NgForm;
    @Input() isDisabled: boolean = false;
    isLoading: boolean = false;

    constructor(
        private globals: Globals
    ) { }

    onClick(event: MouseEvent): void {
        if (!this.isLoading) {
            this.markAsLoading();

            if (!this.form)
                this.clickFn();
            else
                this.form.ngSubmit.emit();
        }
    }

    private markAsLoading(): void {
        this.isLoading = true;
        this.globals.setIsMakingRequest(true);
        this.globals.isMakingRequest.subscribe(res => this.isLoading = res);
    }
}
