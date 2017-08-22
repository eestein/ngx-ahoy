export enum DayOfWeekEnum {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

export class DayOfWeekEnumExtensions {
    public static getDescription(value: DayOfWeekEnum): string {
        if (value != 0 && !value)
            return '';

        switch (value) {
            case DayOfWeekEnum.Monday:
                return 'Segunda-feira';
            case DayOfWeekEnum.Tuesday:
                return 'Terça-feira';
            case DayOfWeekEnum.Wednesday:
                return 'Quarta-feira';
            case DayOfWeekEnum.Thursday:
                return 'Quinta-feira';
            case DayOfWeekEnum.Friday:
                return 'Sexta-feira';
            case DayOfWeekEnum.Saturday:
                return 'Sábado';
            case DayOfWeekEnum.Sunday:
                return 'Domingo';
        }
    }
}