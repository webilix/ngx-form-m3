import { ValidatorFn, FormControl } from '@angular/forms';

import { InputMethods, IInput } from '../input.interface';

export interface IInputIcon extends Omit<IInput, 'english'> {
    readonly type: 'ICON';
}

export class InputIconMethods extends InputMethods<IInputIcon, string | null> {
    override control(input: IInputIcon, validators: ValidatorFn[]): FormControl<string | null> {
        return new FormControl<string | null>(input.value || null, validators);
    }

    override value(value: any, input: IInputIcon): string | null {
        return typeof value === 'string' && value !== '' ? value : null;
    }
}
