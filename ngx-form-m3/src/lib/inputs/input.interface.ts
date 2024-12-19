import { InjectionToken } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';

import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormValues } from '../ngx-form.interface';

export interface IInput {
    readonly name: string;
    readonly title?: string;
    readonly value?: string | null;
    readonly hint?: string;
    readonly description?: string;
    readonly optional?: boolean;
    readonly english?: boolean;
    readonly autoFocus?: boolean;
    readonly appearance?: MatFormFieldAppearance;
    readonly disableOn?: (values: INgxFormValues) => boolean;
    readonly hideOn?: (values: INgxFormValues) => boolean;
}

export abstract class InputMethods<I /** INPUT **/, V /** VALUE **/> {
    abstract control(input: I, validators: ValidatorFn[]): FormControl<V>;
    abstract value(value: any, input: I): V;
}

export interface IInputConfig {
    readonly appearance: MatFormFieldAppearance;
    readonly autoFocus?: string;
}

export const INPUT_CONTROL: InjectionToken<FormControl> = new InjectionToken('NGX-FORM-INPUT-CONTROL');
export const INPUT_TYPE: InjectionToken<any> = new InjectionToken('NGX-FORM-INPUT-TYPE');
export const INPUT_CONFIG: InjectionToken<IInputConfig> = new InjectionToken('NGX-FORM-INPUT-CONFIG');
