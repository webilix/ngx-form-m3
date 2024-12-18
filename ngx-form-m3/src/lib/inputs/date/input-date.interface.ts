import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { MaxDateValidator, MinDateValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputDate extends Omit<IInput, 'english' | 'value' | 'autoFocus'> {
    readonly type: 'DATE';
    readonly value?: Date;
    readonly minDate?: Date | 'NOW';
    readonly maxDate?: Date | 'NOW';
}

export class InputDateMethods extends InputMethods<IInputDate, Date | null> {
    override control(input: IInputDate, validators: ValidatorFn[]): FormControl<Date | null> {
        if (input.minDate) validators.push(MinDateValidator(input.minDate));
        if (input.maxDate) validators.push(MaxDateValidator(input.maxDate));

        const value: Date | null = input.value === undefined ? null : Helper.IS.date(input.value) ? input.value : null;
        return new FormControl<Date | null>(value, validators);
    }

    override value(value: any, input: IInputDate): Date | null {
        return Helper.IS.date(value) ? value : null;
    }
}
