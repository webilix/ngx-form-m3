import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { FormInputMethods, IFormInput } from '../input.interface';

interface IName {
    readonly first: string;
    readonly last: string;
}

export interface IFormInputName extends Omit<IFormInput, 'value' | 'hint' | 'english'> {
    readonly type: 'NAME';
    readonly value?: IName;
}

export class FormInputNameMethods extends FormInputMethods<IFormInputName, IName | null> {
    override control(input: IFormInputName, validators: ValidatorFn[]): FormControl<IName | null> {
        const value: IName | null =
            input.value && Helper.IS.object(input.value) && !!input.value.first && !!input.value.last ? input.value : null;

        return new FormControl<IName | null>(value, validators);
    }

    override value(value: any, input?: IFormInputName | undefined): IName | null {
        return Helper.IS.object(value) ? value : null;
    }
}