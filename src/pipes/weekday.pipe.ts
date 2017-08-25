import { Pipe, PipeTransform } from '@angular/core';
import { DayOfWeekEnum, DayOfWeekEnumExtensions } from '../core/enums/day-of-week.enum';

@Pipe({
    name: 'acWeekday'
})
export class WeekdayPipe implements PipeTransform {
    transform(value: any, args?: any) {
        return DayOfWeekEnumExtensions.getDescription(value);
    }
}