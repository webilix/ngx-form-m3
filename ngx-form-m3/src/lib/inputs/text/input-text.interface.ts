import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { LengthValidator } from '../../validators';

import { InputMethods, IInput } from '../input.interface';

export interface IInputText extends IInput {
    readonly type: 'TEXT';
    readonly title: string;
    readonly minLength?: number;
    readonly maxLength?: number;
}

export class InputTextMethods extends InputMethods<IInputText, string | null> {
    override control(input: IInputText, validators: ValidatorFn[]): FormControl<string | null> {
        const minLength: number | null = input.minLength && input.minLength > 0 ? input.minLength : null;
        const maxLength: number | null = input.maxLength && input.maxLength > 0 ? input.maxLength : null;
        if (minLength && maxLength && minLength === maxLength) validators.push(LengthValidator(minLength));
        else {
            if (minLength && minLength > 0) validators.push(Validators.minLength(minLength));
            if (maxLength && maxLength > 0) validators.push(Validators.maxLength(maxLength));
        }

        return new FormControl<string | null>(input.value || null, validators);
    }

    override value(value: any, input?: IInputText | undefined): string | null {
        return Helper.IS.string(value) && value !== '' ? value : null;
    }
}
