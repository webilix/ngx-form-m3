import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputAutoComplete extends IInput {
    readonly type: 'AUTO-COMPLETE';
    readonly title: string;
    readonly options: string[];
}

export class InputAutoCompleteMethods extends InputMethods<IInputAutoComplete, string | null> {
    override control(input: IInputAutoComplete, validators: ValidatorFn[]): FormControl<string | null> {
        const options: string[] = input.options;
        const value: string | null = input.value && Helper.IS.string(input.value) ? input.value : null;
        if (value && !options.includes(value)) options.push(value);

        Object.assign(input, { options: options.sort((o1: string, o2: string) => o1.localeCompare(o2)) });
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputAutoComplete): string | null {
        return value && Helper.IS.string(value) ? value : null;
    }
}
