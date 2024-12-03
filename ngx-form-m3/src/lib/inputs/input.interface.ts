import { FormControl, ValidatorFn } from '@angular/forms';

import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormValues } from '../ngx-form.interface';

export interface IFormInput {
    readonly name: string;
    readonly title?: string;
    readonly value?: string;
    readonly hint?: string;
    readonly description?: string;
    readonly optional?: boolean;
    readonly english?: boolean;
    readonly autoFocus?: boolean;
    readonly appearance?: MatFormFieldAppearance;
    readonly disableOn?: (values: INgxFormValues) => boolean;
    readonly hideOn?: (values: INgxFormValues) => boolean;
}

export abstract class FormInputMethods<I /** INPUT **/, V /** VALUE **/> {
    abstract control(input: I, validators: ValidatorFn[]): FormControl<V>;
    abstract value(value: any, input?: I): V;
}
