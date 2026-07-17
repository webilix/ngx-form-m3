import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const NationalCodeValidator = (): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.string(value)) return null;

        // ERRORS
        if (!Helper.IS.STRING.nationalCode(value)) return { nationalCode: true };

        return null;
    };
};
