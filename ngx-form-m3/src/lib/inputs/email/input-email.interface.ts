import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { FormInputMethods, IFormInput } from '../input.interface';

export interface IFormInputEmail extends Omit<IFormInput, 'english'> {
    readonly type: 'EMAIL';
}

export class FormInputEmailMethods extends FormInputMethods<IFormInputEmail, string | null> {
    override control(input: IFormInputEmail, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(Validators.pattern(Helper.RE.EMAIL.get()));

        const value: string | null =
            input.value === undefined ? null : Helper.RE.EMAIL.verify(input.value) ? input.value.toLowerCase() : null;

        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input?: IFormInputEmail | undefined): string | null {
        return typeof value === 'string' && Helper.RE.EMAIL.verify(value) ? value.toLowerCase() : null;
    }
}
