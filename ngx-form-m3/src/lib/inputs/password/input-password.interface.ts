import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { FormInputMethods, IFormInput } from '../input.interface';

export interface IFormInputPassword extends Omit<IFormInput, 'english' | 'value'> {
    readonly type: 'PASSWORD';
    readonly verify?: {
        readonly minLength: number;
        readonly forceLowerCase?: boolean;
        readonly forceUpperCase?: boolean;
        readonly forceNumber?: boolean;
    };
}

export class FormInputPasswordMethods extends FormInputMethods<IFormInputPassword, string | null> {
    override control(input: IFormInputPassword, validators: ValidatorFn[]): FormControl<string | null> {
        if (input.verify) {
            validators.push(Validators.minLength(input.verify.minLength));
            if (input.verify.forceLowerCase !== false)
                validators.push(Validators.pattern(Helper.RE.PASSWORD.get(input.verify.minLength, true, false, false)));
            if (input.verify.forceUpperCase !== false)
                validators.push(Validators.pattern(Helper.RE.PASSWORD.get(input.verify.minLength, false, true, false)));
            if (input.verify.forceNumber !== false)
                validators.push(Validators.pattern(Helper.RE.PASSWORD.get(input.verify.minLength, false, false, true)));
        }

        return new FormControl<string | null>(null, validators);
    }

    override value(value: any, input?: IFormInputPassword | undefined): string | null {
        return Helper.IS.string(value) && value !== '' ? value : null;
    }
}
