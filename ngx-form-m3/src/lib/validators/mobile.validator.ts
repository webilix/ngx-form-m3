import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const MobileValidator = (): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = (formControl.value || '').replace(/-/g, '');
        if (Helper.IS.empty(value) || !Helper.IS.string(value)) return null;

        // ERRORS
        if (value.length !== 9) return { mobile: 'length' };
        if (!Helper.IS.STRING.mobile(`09${value}`)) return { mobile: 'validate' };

        return null;
    };
};
