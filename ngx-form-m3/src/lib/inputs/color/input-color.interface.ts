import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputColor extends Omit<IInput, 'english' | 'autoFocus'> {
    readonly type: 'COLOR';
}

export class InputColorMethods extends InputMethods<IInputColor, string | null> {
    override control(input: IInputColor, validators: ValidatorFn[]): FormControl<string | null> {
        const value: string | null =
            input.value !== undefined && Helper.IS.STRING.color(input.value) ? Helper.COLOR.toHEX(input.value) : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputColor): string | null {
        return Helper.IS.STRING.color(value) ? String(Helper.COLOR.toHEX(value)).toUpperCase() : null;
    }
}
