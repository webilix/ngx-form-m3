import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputEmail extends Omit<IInput, 'english'> {
    readonly type: 'EMAIL';
    readonly showIcon?: boolean;
}

export class InputEmailMethods extends InputMethods<IInputEmail, string | null> {
    override control(input: IInputEmail, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(Validators.pattern(Helper.RE.EMAIL.get()));

        const value: string | null = input.value && Helper.RE.EMAIL.verify(input.value) ? input.value.toLowerCase() : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputEmail): string | null {
        return typeof value === 'string' && Helper.RE.EMAIL.verify(value) ? value.toLowerCase() : null;
    }
}
