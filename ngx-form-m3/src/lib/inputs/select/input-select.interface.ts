import { ValidatorFn, FormControl } from '@angular/forms';

import { INgxFormGroupOption, INgxFormOption } from '../../ngx-form.inputs';

import { InputMethods, IInput } from '../input.interface';

export interface IInputSelect extends IInput {
    readonly type: 'SELECT';
    readonly title: string;
    readonly options: INgxFormGroupOption[] | INgxFormOption[];
    readonly hideSearch?: boolean;
}

export class InputSelectMethods extends InputMethods<IInputSelect, string | null> {
    override control(input: IInputSelect, validators: ValidatorFn[]): FormControl<string | null> {
        const ids: string[] = input.options
            .map((option) => ('group' in option ? option.options.map((o) => o.id) : option.id))
            .flat();

        let value: string | null = input.value && ids.includes(input.value) ? input.value : null;
        if (value === null && ids.length === 1 && !input.optional) value = ids[0];
        return new FormControl<string | null>(value, validators);
    }

    override value(value: any, input: IInputSelect): string | null {
        const ids: string[] = input.options
            .map((option) => ('group' in option ? option.options.map((o) => o.id) : option.id))
            .flat();

        return value && ids.includes(value) ? value : null;
    }
}
