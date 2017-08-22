import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePickerComponent } from 'ngx-bootstrap/datepicker';
import { BsDropdownContainerComponent } from 'ngx-bootstrap/dropdown';
import { Masks } from '../../../core/utils/masks';

@Component({
    selector: 'ac-datepicker',
    templateUrl: './ac-datepicker.component.html',
    styleUrls: ['./ac-datepicker.component.css']
})
export class AcDatepickerComponent implements OnInit {
    @Input() isRequired: boolean = false;
    @Input() showOnTop: boolean = false;
    @Input() selectedDate: Date;
    @Output() selectedDateChange: EventEmitter<Date> = new EventEmitter<Date>();
    @Input() minDate: Date = new Date();

    constructor(
        public masks: Masks
    ) { }

    ngOnInit(): void {
    }

    selectionDone(container: any, event: Date): void {
        this.selectedDate = event;
        this.selectedDateChange.emit(event);
        container.hide();
    }
}

