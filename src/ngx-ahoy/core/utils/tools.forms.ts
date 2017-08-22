import { FormGroup } from '@angular/forms';

export module Tools {
    export class Forms {
        public static getChangedProperties(formGroup: FormGroup): string[] {
            let changedProperties: any[] = [];

            Object.keys(formGroup.controls).forEach((name) => {
                let currentControl = formGroup.controls[name];

                if (currentControl.dirty)
                    changedProperties.push(name);
            });

            return changedProperties;
        }

        public static updateFrom(source: any, target: any): void {
            Object.keys(source).forEach(key => {
                if (target.hasOwnProperty(key))
                    target[key] = source[key]
            });
        }

        //ToDo - Verificar uma forma de alterar esse método
        public static removeMask(valor: any): string {
            return String(valor).replace(/[^\d]+/g, '');
        }
    }
}