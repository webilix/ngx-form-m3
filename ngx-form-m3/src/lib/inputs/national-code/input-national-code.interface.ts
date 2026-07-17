import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NationalCodeValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputNationalCode extends Omit<IInput, 'english'> {
    readonly type: 'NATIONAL-CODE';
    readonly showIcon?: boolean;
}

export class InputNationalCodeMethods extends InputMethods<IInputNationalCode, string | null> {
    override control(input: IInputNationalCode, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(NationalCodeValidator());

        const value: string | null =
            input.value && Helper.IS.STRING.nationalCode(input.value) ? input.value.toLowerCase() : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputNationalCode): string | null {
        return typeof value === 'string' && Helper.IS.STRING.nationalCode(value) ? value.toLowerCase() : null;
    }
}
