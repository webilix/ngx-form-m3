import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

interface IName {
    readonly first: string;
    readonly last: string;
}

export interface IInputName extends Omit<IInput, 'value' | 'hint' | 'english' | 'description'> {
    readonly type: 'NAME';
    readonly value?: IName;
}

export class InputNameMethods extends InputMethods<IInputName, IName | null> {
    override control(input: IInputName, validators: ValidatorFn[]): FormControl<IName | null> {
        const value: IName | null =
            input.value && Helper.IS.object(input.value) && !!input.value.first && !!input.value.last ? input.value : null;

        return new FormControl<IName | null>(value, validators);
    }

    override value(value: any, input: IInputName): IName | null {
        return Helper.IS.object(value) ? value : null;
    }
}
