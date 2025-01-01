import { ValidatorFn, FormControl } from '@angular/forms';

import { InputMethods, IInput } from '../input.interface';

export interface IInputCheckbox extends Omit<IInput, 'title' | 'value' | 'optional' | 'autoFocus'> {
    readonly type: 'CHECKBOX';
    readonly message: string;
    readonly value?: boolean;
}

export class InputCheckboxMethods extends InputMethods<IInputCheckbox, boolean | null> {
    override control(input: IInputCheckbox, validators: ValidatorFn[]): FormControl<boolean | null> {
        return new FormControl<boolean | null>(!!input.value, validators);
    }

    override value(value: any, input: IInputCheckbox): boolean | null {
        return !!value;
    }
}
