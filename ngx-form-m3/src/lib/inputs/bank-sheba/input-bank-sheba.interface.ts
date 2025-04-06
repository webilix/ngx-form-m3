import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { BankShebaValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputBankSheba extends Omit<IInput, 'english'> {
    readonly type: 'BANK-SHEBA';
    readonly hideBank?: boolean;
}

export class InputBankShebaMethods extends InputMethods<IInputBankSheba, string | null> {
    override control(input: IInputBankSheba, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(BankShebaValidator());

        const value: string | null =
            input.value && Helper.IS.STRING.bankSheba(input.value) ? input.value.substring(2) : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputBankSheba): string | null {
        return Helper.IS.STRING.bankSheba(`IR${value}`) ? `IR${value}` : null;
    }
}
