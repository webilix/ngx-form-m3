import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { MaxNumberValidator, MinNumberValidator, MultiplyOfNumberValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputNumber extends Omit<IInput, 'value' | 'english'> {
    readonly type: 'NUMBER';
    readonly title: string;
    readonly value?: number | null;
    readonly minimum?: number;
    readonly maximum?: number;
    readonly multiplyOf?: number;
    readonly allowNegatives?: boolean;
    readonly fractionDigits?: boolean | number;
    readonly showIcon?: boolean;
    readonly showText?: boolean;
}

export class InputNumberMethods extends InputMethods<IInputNumber, number | null> {
    override control(input: IInputNumber, validators: ValidatorFn[]): FormControl<number | null> {
        if (input.minimum) validators.push(MinNumberValidator(input.minimum));
        if (input.maximum) validators.push(MaxNumberValidator(input.maximum));
        if (input.multiplyOf) validators.push(MultiplyOfNumberValidator(input.multiplyOf));

        const value: number | null = input.value !== undefined && Helper.IS.number(input.value) ? input.value : null;
        return new FormControl<number | null>(value, validators);
    }

    override value(value: any, input: IInputNumber): number | null {
        return Helper.IS.number(value) ? value : null;
    }
}
