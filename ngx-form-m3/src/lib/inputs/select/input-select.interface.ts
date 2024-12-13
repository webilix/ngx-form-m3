import { ValidatorFn, FormControl } from '@angular/forms';

import { InputMethods, IInput } from '../input.interface';

export interface IInputSelect extends IInput {
    readonly type: 'SELECT';
    readonly title: string;
    readonly options: {
        readonly id: string;
        readonly title: string;
    }[];
}

export class InputSelectMethods extends InputMethods<IInputSelect, string | null> {
    override control(input: IInputSelect, validators: ValidatorFn[]): FormControl<string | null> {
        const ids: string[] = input.options.map((option) => option.id);
        const value: string | null = input.value && ids.includes(input.value) ? input.value : null;

        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputSelect): string | null {
        return value && input.options.find((option) => option.id === value) ? value : null;
    }
}
