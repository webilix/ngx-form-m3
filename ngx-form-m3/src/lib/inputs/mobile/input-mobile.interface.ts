import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputMobile extends Omit<IInput, 'english'> {
    readonly type: 'MOBILE';
    readonly showIcon?: boolean;
}

export class InputMobileMethods extends InputMethods<IInputMobile, string | null> {
    override control(input: IInputMobile, validators: ValidatorFn[]): FormControl<string | null> {
        const value: string | null = input.value && Helper.RE.MOBILE.verify(input.value) ? input.value.substring(2) : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputMobile): string | null {
        return typeof value === 'string' && Helper.RE.MOBILE.verify(`09${value}`) ? `09${value}` : null;
    }
}
