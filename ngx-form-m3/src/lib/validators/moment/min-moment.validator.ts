import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Helper } from '@webilix/helper-library';

export const MinMomentValidator = (min: Date | 'NOW'): ValidatorFn => {
    const jalali = JalaliDateTime();
    const formatDate = (date: Date) => jalali.toString(date, { format: 'Y-M-D H:I' });

    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.date(value)) return null;

        const minimum: Date = min === 'NOW' ? new Date() : min;
        return formatDate(value) < formatDate(minimum)
            ? { minmoment: jalali.toFullText(minimum, { format: 'H:I Y/M/D' }) }
            : null;
    };
};
