import { ValidatorFn, FormControl } from '@angular/forms';

import { MaxCountValidator, MinCountValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputMultiSelect extends Omit<IInput, 'value' | 'optional' | 'autoFocus'> {
    readonly type: 'MULTI-SELECT';
    readonly title: string;
    readonly value?: string[] | null;
    readonly options: {
        readonly id: string;
        readonly title: string;
    }[];
    readonly groups?: {
        readonly title: string;
        readonly ids: string[];
    }[];
    readonly minCount?: number;
    readonly maxCount?: number;
    readonly listMaxHeight?: number;
    readonly selectButtons?: boolean;
    readonly view?: 'SELECT';
}

export class InputMultiSelectMethods extends InputMethods<IInputMultiSelect, string[] | null> {
    override control(input: IInputMultiSelect, validators: ValidatorFn[]): FormControl<string[] | null> {
        const ids: string[] = input.options.map((option) => option.id);
        const value: string[] = (input.value || []).filter((id: string) => ids.includes(id));
        if (input.minCount) validators.push(MinCountValidator(input.minCount));
        if (input.maxCount) validators.push(MaxCountValidator(input.maxCount));

        return new FormControl<string[] | null>(value, validators);
    }

    override value(value: any, input: IInputMultiSelect): string[] | null {
        const ids: string[] = input.options.map((option) => option.id);
        value = (Array.isArray(value) ? value : []).filter((id: string) => ids.includes(id));
        return value.length > 0 ? value : null;
    }
}
