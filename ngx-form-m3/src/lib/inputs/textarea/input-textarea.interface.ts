import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IInputTextarea extends IInput {
    readonly type: 'TEXTAREA';
    readonly title: string;
    readonly height?: number;
    readonly autoHeight?: boolean;
    readonly maxHeight?: number;
    readonly maxLength?: number;
    readonly counter?: boolean;
}

export class InputTextareaMethods extends InputMethods<IInputTextarea, string | null> {
    override control(input: IInputTextarea, validators: ValidatorFn[]): FormControl<string | null> {
        const maxLength: number | null = input.maxLength && input.maxLength > 0 ? input.maxLength : null;
        if (maxLength && maxLength > 0) validators.push(Validators.maxLength(maxLength));

        return new FormControl<string | null>(input.value || null, validators);
    }

    override value(value: any, input?: IInputTextarea | undefined): string | null {
        return Helper.IS.string(value) && value !== '' ? value : null;
    }
}
