import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Helper } from '@webilix/helper-library';

export const MinDateValidator = (min: Date | 'NOW'): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.date(value)) return null;

        const jalali = JalaliDateTime();
        const minimum: Date = jalali.periodDay(1, min === 'NOW' ? new Date() : min).from;

        return value.getTime() < minimum.getTime() ? { mindate: jalali.toFullText(minimum, { format: 'Y/M/D' }) } : null;
    };
};
