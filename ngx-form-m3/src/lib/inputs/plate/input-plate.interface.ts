import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { PlateValidator } from '../../validators';
import { INgxFormPlate } from '../../ngx-form.inputs';

import { IInput, InputMethods } from '../input.interface';

export interface IInputPlate extends Omit<IInput, 'english' | 'value'> {
    readonly type: 'PLATE';
    readonly value?: INgxFormPlate;
    readonly defaultLetter?: string;
    readonly onComplete?: (value: INgxFormPlate) => void;
}

export class InputPlateMethods extends InputMethods<IInputPlate, INgxFormPlate | null> {
    override control(input: IInputPlate, validators: ValidatorFn[]): FormControl<INgxFormPlate | null> {
        validators.push(PlateValidator());

        const value: INgxFormPlate | null =
            input.value &&
            Helper.IS.object(input.value) &&
            !!input.value.regional &&
            !!input.value.letter &&
            !!input.value.serial &&
            !!input.value.iran
                ? input.value
                : null;
        return new FormControl<INgxFormPlate | null>(value, validators);
    }

    override value(value: any, input: IInputPlate): INgxFormPlate | null {
        return Helper.IS.object(value) ? value : null;
    }
}
