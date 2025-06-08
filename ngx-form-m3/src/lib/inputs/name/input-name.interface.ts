import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { INgxFormName } from '../../ngx-form.inputs';

import { InputMethods, IInput } from '../input.interface';

export interface IInputName extends Omit<IInput, 'value' | 'hint' | 'english' | 'description' | 'button'> {
    readonly type: 'NAME';
    readonly value?: INgxFormName | null;
}

export class InputNameMethods extends InputMethods<IInputName, INgxFormName | null> {
    override control(input: IInputName, validators: ValidatorFn[]): FormControl<INgxFormName | null> {
        const value: INgxFormName | null =
            input.value && Helper.IS.object(input.value) && !!input.value.first && !!input.value.last ? input.value : null;
        return new FormControl<INgxFormName | null>(value, validators);
    }

    override value(value: any, input: IInputName): INgxFormName | null {
        return Helper.IS.object(value) ? value : null;
    }
}
