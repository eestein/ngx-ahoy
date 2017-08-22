import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'acCurrency'
})
export class CurrencyPipe implements PipeTransform {
    transform(value: any, args?: any) {
        if (value != 0 && !value)
            return '';

        var value = value.toFixed(2).split('.');

        value[0] = "R$ " + value[0].split(/(?=(?:...)*$)/).join('.');

        return value.join(',');
    }
}