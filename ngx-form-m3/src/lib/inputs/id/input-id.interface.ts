import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { IdValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputId extends Omit<IInput, 'english'> {
    readonly type: 'ID';
    readonly showIcon?: boolean;
    readonly verify?: {
        readonly minLength?: number;
        readonly maxLength?: number;
        readonly useDash?: boolean;
        readonly useDot?: boolean;
        readonly canStartWithNumber?: boolean;
        readonly canEndWithNumber?: boolean;
    };
}

export class InputIdMethods extends InputMethods<IInputId, string | null> {
    override control(input: IInputId, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(IdValidator(input.verify));
        return new FormControl<string | null>(input.value || null, validators);
    }

    override value(value: any, input: IInputId): string | null {
        return Helper.IS.string(value) && value !== '' ? value : null;
    }
}
