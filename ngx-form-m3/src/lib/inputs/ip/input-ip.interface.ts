import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputIp extends Omit<IInput, 'english'> {
    readonly type: 'IP';
    readonly showIcon?: boolean;
}

export class InputIpMethods extends InputMethods<IInputIp, string | null> {
    override control(input: IInputIp, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(Validators.pattern(Helper.RE.IP4.get(true)));

        const value: string | null = input.value && Helper.RE.IP4.verify(input.value) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputIp): string | null {
        return typeof value === 'string' && Helper.RE.IP4.verify(value) ? value : null;
    }
}
