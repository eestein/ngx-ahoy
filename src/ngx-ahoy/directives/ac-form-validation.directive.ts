import { Directive, ElementRef, Renderer, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { SelectComponent } from 'ng2-select';

@Directive({
    selector: '[acFormValidation]'
})
export class AcFormValidationDirective {
    @Input() udFormValidation: FormGroup;
    private idPrefix: string = 'udformvald-';

    constructor(
        private el: ElementRef,
        private renderer: Renderer
    ) { }

    ngOnInit(): void {
        this.udFormValidation.statusChanges.subscribe(status => {
            if (document.readyState === "complete") {
                this.validateForm();
            } else {
                window.addEventListener("load", () => {
                    this.validateForm();
                });
            }
        });
    }

    private validateForm(): void {
        for (let key in this.udFormValidation.controls) {
            let status: string = this.udFormValidation.controls[key].status;
            let element: HTMLElement = document.getElementsByName(key)[0];
            let data: NodeListOf<HTMLElement> = document.getElementsByName(key);

            for (let i = 0; i < data.length; i++) {
                let radioElement: HTMLElement = data.item(i).parentElement;

                if (status == 'VALID') {
                    radioElement.classList.remove('has-error');

                    // if (helpElement) //todo
                    //     input.parentNode.removeChild(helpElement);
                }
                else if (status == 'INVALID') {
                    radioElement.classList.add('has-error');

                    // if (!helpElement)
                    //     input.parentNode.insertAdjacentHTML('beforeend', `<span id="${helpElementId}" class="help-block">Campo obrigatório.</span>`)
                }
            }
        }
    }
}
