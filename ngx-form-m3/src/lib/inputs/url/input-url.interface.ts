import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputUrl extends Omit<IInput, 'english'> {
    readonly type: 'URL';
    readonly showIcon?: boolean;
}

export class InputUrlMethods extends InputMethods<IInputUrl, string | null> {
    override control(input: IInputUrl, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(Validators.pattern(Helper.RE.URL.get(true)));

        const value: string | null = input.value && Helper.RE.URL.verify(input.value, true) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputUrl): string | null {
        return typeof value === 'string' && Helper.RE.URL.verify(value, true) ? value : null;
    }
}
