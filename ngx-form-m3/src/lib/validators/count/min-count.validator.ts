import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const MinCountValidator = (min: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string[] = Array.isArray(formControl.value) ? formControl.value : [];
        return value.length === 0 ? { required: true } : value.length < min ? { mincount: min } : null;
    };
};
