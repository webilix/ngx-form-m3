import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputTime extends Omit<IInput, 'english' | 'autoFocus'> {
    readonly type: 'TIME';
    readonly showSeconds?: boolean;
}

export class InputTimeMethods extends InputMethods<IInputTime, string | null> {
    override control(input: IInputTime, validators: ValidatorFn[]): FormControl<string | null> {
        const value: string | null = input.value && Helper.IS.STRING.time(input.value) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputTime): string | null {
        return Helper.IS.string(value) && Helper.IS.STRING.time(value) ? value : null;
    }
}
