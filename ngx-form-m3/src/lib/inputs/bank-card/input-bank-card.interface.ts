import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { BankCardValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputBankCard extends Omit<IInput, 'english'> {
    readonly type: 'BANK-CARD';
    readonly hideBank?: boolean;
}

export class InputBankCardMethods extends InputMethods<IInputBankCard, string | null> {
    override control(input: IInputBankCard, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(BankCardValidator());

        const value: string | null = input.value && Helper.IS.STRING.bankCard(input.value) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputBankCard): string | null {
        return Helper.IS.STRING.bankCard(value) ? value : null;
    }
}
