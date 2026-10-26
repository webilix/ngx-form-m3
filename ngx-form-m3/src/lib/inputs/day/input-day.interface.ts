import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputDay extends Omit<IInput, 'english' | 'autoFocus'> {
    readonly type: 'DAY';
}

export class InputDayMethods extends InputMethods<IInputDay, string | null> {
    override control(input: IInputDay, validators: ValidatorFn[]): FormControl<string | null> {
        const value: string | null = input.value && Helper.IS.STRING.day(input.value) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputDay): string | null {
        return Helper.IS.STRING.day(value) ? value : null;
    }
}
