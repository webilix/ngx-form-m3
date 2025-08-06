import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { MaxCountValidator, MinCountValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputTag extends Omit<IInput, 'value' | 'optional' | 'english'> {
    readonly type: 'TAG';
    readonly value?: string[];
    readonly tags: string[];
    readonly minCount?: number;
    readonly maxCount?: number;
    readonly orderList?: boolean;
}

export class InputTagMethods extends InputMethods<IInputTag, string[] | null> {
    override control(input: IInputTag, validators: ValidatorFn[]): FormControl<string[] | null> {
        if (input.minCount) validators.push(MinCountValidator(input.minCount));
        if (input.maxCount) validators.push(MaxCountValidator(input.maxCount));

        const value: string[] = (Array.isArray(input.value) ? input.value : [])
            .filter((value: string) => Helper.IS.string(value) && value !== '')
            .filter((value, index, arr) => arr.indexOf(value) === index);
        return new FormControl<string[] | null>(value, validators);
    }

    override value(value: any, input: IInputTag): string[] | null {
        return Array.isArray(value) && value.length > 0 ? value : null;
    }
}
