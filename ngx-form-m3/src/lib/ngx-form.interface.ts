import { InjectionToken } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

import { MatFormFieldAppearance } from '@angular/material/form-field';

import {
    IInputAutoComplete,
    IInputCheckbox,
    IInputColor,
    IInputComponent,
    IInputCoordinates,
    IInputDate,
    IInputEmail,
    IInputFile,
    IInputIcon,
    IInputIp,
    IInputMobile,
    IInputMoment,
    IInputMultiSelect,
    IInputName,
    IInputNumber,
    IInputPassword,
    IInputSelect,
    IInputText,
    IInputTextarea,
    IInputUrl,
} from './inputs';

export type NgxFormInputs =
    | IInputAutoComplete
    | IInputCheckbox
    | IInputColor
    | IInputComponent
    | IInputCoordinates
    | IInputDate
    | IInputEmail
    | IInputFile
    | IInputIcon
    | IInputIp
    | IInputMobile
    | IInputMoment
    | IInputMultiSelect
    | IInputName
    | IInputNumber
    | IInputPassword
    | IInputSelect
    | IInputText
    | IInputTextarea
    | IInputUrl;

type Inputs =
    | NgxFormInputs
    | { readonly header: string; readonly input: NgxFormInputs }
    | { readonly header?: string; readonly inputs: NgxFormInputs[]; readonly flex?: number[] };

interface INgxFormColumn {
    readonly header?: string;
    readonly rows: Inputs[];
}

export interface INgxForm {
    readonly submit: string;
    readonly inputs: (Inputs | { readonly header?: string; readonly columns: INgxFormColumn[]; readonly flex?: number[] })[];
    readonly buttons?: INgxFormButton[];

    // SETTINGS
    readonly mobileView?: boolean;
    readonly appearance?: MatFormFieldAppearance;

    // ACTIOS
    updateValues?: (values: INgxFormValues) => { [key: string]: any };
}

export interface INgxFormInit {
    readonly formGroup?: FormGroup;
    readonly ngForm?: NgForm;
}

export interface INgxFormButton {
    readonly title: string;
    readonly action: string[] | (() => void);
}

export interface INgxFormValues {
    [key: string]: any;
}

export const NGX_FORM_CONTROL: InjectionToken<FormControl> = new InjectionToken('NGX_FORM_CONTROL');
export const NGX_FORM_INPUT: InjectionToken<IInputComponent> = new InjectionToken('NGX_FORM_INPUT');
