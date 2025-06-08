import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { DuplicateValidator, MaxCountValidator, MinCountValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputItemList extends Omit<IInput, 'value' | 'optional'> {
    readonly type: 'ITEM-LIST';
    readonly title: string;
    readonly value?: string[];
    readonly minCount?: number;
    readonly maxCount?: number;
    readonly disableSort?: boolean;
    readonly allowDuplicates?: boolean;
}

export class InputItemListMethods extends InputMethods<IInputItemList, string[] | null> {
    override control(input: IInputItemList, validators: ValidatorFn[]): FormControl<string[] | null> {
        if (!input.allowDuplicates) validators.push(DuplicateValidator<string>((value) => value));
        if (input.minCount) validators.push(MinCountValidator(input.minCount));
        if (input.maxCount) validators.push(MaxCountValidator(input.maxCount));

        const value: string[] = (Array.isArray(input.value) ? input.value : []).filter(
            (value: string) => Helper.IS.string(value) && value !== '',
        );
        return new FormControl<string[] | null>(value, validators);
    }

    override value(value: any, input: IInputItemList): string[] | null {
        return Array.isArray(value) && value.length > 0 ? value : null;
    }
}
