import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Helper } from '@webilix/helper-library';

export const MaxMomentValidator = (max: Date | 'NOW'): ValidatorFn => {
    const jalali = JalaliDateTime();
    const formatDate = (date: Date) => jalali.toString(date, { format: 'Y-M-D H:I' });

    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.date(value)) return null;

        const maximum: Date = max === 'NOW' ? new Date() : max;
        return formatDate(value) > formatDate(maximum)
            ? { maxmoment: jalali.toFullText(maximum, { format: 'H:I Y/M/D' }) }
            : null;
    };
};
