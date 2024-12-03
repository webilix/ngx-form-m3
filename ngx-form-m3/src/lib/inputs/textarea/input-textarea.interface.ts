import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { FormInputMethods, IFormInput } from '../input.interface';

export interface IFormInputTextarea extends IFormInput {
    readonly type: 'TEXTAREA';
    readonly title: string;
    readonly height?: number;
    readonly autoHeight?: boolean;
    readonly maxHeight?: number;
    readonly maxLength?: number;
    readonly counter?: boolean;
}

export class FormInputTextareaMethods extends FormInputMethods<IFormInputTextarea, string | null> {
    override control(input: IFormInputTextarea, validators: ValidatorFn[]): FormControl<string | null> {
        const maxLength: number | null = input.maxLength && input.maxLength > 0 ? input.maxLength : null;
        if (maxLength && maxLength > 0) validators.push(Validators.maxLength(maxLength));

        return new FormControl<string | null>(input.value || null, validators);
    }

    override value(value: any, input?: IFormInputTextarea | undefined): string | null {
        return Helper.IS.string(value) && value !== '' ? value : null;
    }
}
