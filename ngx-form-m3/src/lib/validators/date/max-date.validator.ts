import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Helper } from '@webilix/helper-library';

export const MaxDateValidator = (max: Date | 'NOW'): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.date(value)) return null;

        const jalali = JalaliDateTime();
        const maximum: Date = jalali.periodDay(1, max === 'NOW' ? new Date() : max).to;

        return value.getTime() > maximum.getTime() ? { maxdate: jalali.toFullText(maximum, { format: 'Y/M/D' }) } : null;
    };
};
