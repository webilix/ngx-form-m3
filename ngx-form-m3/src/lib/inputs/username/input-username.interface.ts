import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { UsernameValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputUsername extends Omit<IInput, 'english'> {
    readonly type: 'USERNAME';
    readonly verify?: {
        readonly minLength?: number;
        readonly useDash?: boolean;
        readonly useDot?: boolean;
        readonly startWithChar?: boolean;
        readonly endWithChar?: boolean;
    };
}

export class InputUsernameMethods extends InputMethods<IInputUsername, string | null> {
    override control(input: IInputUsername, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(UsernameValidator(input.verify));
        return new FormControl<string | null>(input.value || null, validators);
    }

    override value(value: any, input: IInputUsername): string | null {
        return Helper.IS.string(value) && value !== '' ? value : null;
    }
}
