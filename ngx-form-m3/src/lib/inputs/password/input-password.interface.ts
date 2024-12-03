import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputPassword extends Omit<IInput, 'english' | 'value'> {
    readonly type: 'PASSWORD';
    readonly verify?: {
        readonly minLength: number;
        readonly forceLowerCase?: boolean;
        readonly forceUpperCase?: boolean;
        readonly forceNumber?: boolean;
    };
}

export class FormInputPasswordMethods extends InputMethods<IInputPassword, string | null> {
    override control(input: IInputPassword, validators: ValidatorFn[]): FormControl<string | null> {
        if (input.verify) {
            validators.push(Validators.minLength(input.verify.minLength));
            if (input.verify.forceLowerCase)
                validators.push(Validators.pattern(Helper.RE.PASSWORD.get(input.verify.minLength, true, false, false)));
            if (input.verify.forceUpperCase)
                validators.push(Validators.pattern(Helper.RE.PASSWORD.get(input.verify.minLength, false, true, false)));
            if (input.verify.forceNumber)
                validators.push(Validators.pattern(Helper.RE.PASSWORD.get(input.verify.minLength, false, false, true)));
        }

        return new FormControl<string | null>(null, validators);
    }

    override value(value: any, input?: IInputPassword | undefined): string | null {
        return Helper.IS.string(value) && value !== '' ? value : null;
    }
}
