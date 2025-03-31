import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const MaxCountValidator = (max: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string[] = Array.isArray(formControl.value) ? formControl.value : [];
        return value.length > max ? { maxcount: max } : null;
    };
};
