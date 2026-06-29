import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const BankCardValidator = (): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = (formControl.value || '').replace(/-/g, '');
        if (Helper.IS.empty(value) || !Helper.IS.string(value)) return null;

        // ERRORS
        if (value.length !== 16) return { 'bank-card': 'length' };
        if (!Helper.IS.STRING.bankCard(value)) return { 'bank-card': 'validate' };

        return null;
    };
};
