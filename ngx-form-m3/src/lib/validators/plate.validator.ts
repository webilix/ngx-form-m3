import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';
import { INgxFormPlate } from '../ngx-form.inputs';

export const PlateValidator = (): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: INgxFormPlate = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.object(value)) return null;

        if (
            // REGIONAL
            !Helper.IS.STRING.numeric(value.regional) ||
            value.regional.length !== 2 ||
            // LETTER
            !Helper.IS.string(value.letter) ||
            value.letter.length !== 1 ||
            // SERIAL
            !Helper.IS.STRING.numeric(value.serial) ||
            value.serial.length !== 3 ||
            // IRAN
            !Helper.IS.STRING.numeric(value.iran) ||
            value.iran.length !== 2
        )
            return { plate: true };

        return null;
    };
};
