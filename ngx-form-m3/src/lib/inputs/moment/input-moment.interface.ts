import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { MaxMomentValidator, MinMomentValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputMoment extends Omit<IInput, 'english' | 'value' | 'autoFocus'> {
    readonly type: 'MOMENT';
    readonly value?: Date | null;
    readonly minDate?: Date | 'NOW';
    readonly maxDate?: Date | 'NOW';
    readonly format?: string;
}

export class InputMomentMethods extends InputMethods<IInputMoment, Date | null> {
    override control(input: IInputMoment, validators: ValidatorFn[]): FormControl<Date | null> {
        if (input.minDate) validators.push(MinMomentValidator(input.minDate));
        if (input.maxDate) validators.push(MaxMomentValidator(input.maxDate));

        const value: Date | null = input.value && Helper.IS.date(input.value) ? input.value : null;
        return new FormControl<Date | null>(value, validators);
    }

    override value(value: any, input: IInputMoment): Date | null {
        return Helper.IS.date(value) ? value : null;
    }
}
