import { FormGroup, NgForm } from '@angular/forms';

import { MatFormFieldAppearance } from '@angular/material/form-field';

import {
    IInputColor,
    IInputDate,
    IInputEmail,
    IInputFile,
    IInputMobile,
    IInputName,
    IInputPassword,
    IInputSelect,
    IInputText,
    IInputTextarea,
    IInputUrl,
} from './inputs';

export type NgxFormInputs =
    | IInputColor
    | IInputDate
    | IInputEmail
    | IInputFile
    | IInputMobile
    | IInputName
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
