import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { FormInputMethods, IFormInput } from '../input.interface';

export interface IFormInputMobile extends Omit<IFormInput, 'english'> {
    readonly type: 'MOBILE';
}

export class FormInputMobileMethods extends FormInputMethods<IFormInputMobile, string | null> {
    override control(input: IFormInputMobile, validators: ValidatorFn[]): FormControl<string | null> {
        const value: string | null =
            input.value === undefined ? null : Helper.RE.MOBILE.verify(input.value) ? input.value.substring(2) : null;

        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input?: IFormInputMobile | undefined): string | null {
        return typeof value === 'string' && Helper.RE.MOBILE.verify(`09${value}`) ? `09${value}` : null;
    }
}
