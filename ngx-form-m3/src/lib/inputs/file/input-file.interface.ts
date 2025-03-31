import { ValidatorFn, FormControl } from '@angular/forms';

import { InputMethods, IInput } from '../input.interface';

export interface IInputFile extends Omit<IInput, 'value' | 'english' | 'autoFocus'> {
    readonly type: 'FILE';
    readonly mimes?: 'IMAGE' | string[];
}

export class InputFileMethods extends InputMethods<IInputFile, File | null> {
    override control(input: IInputFile, validators: ValidatorFn[]): FormControl<File | null> {
        return new FormControl<File | null>(null, validators);
    }

    override value(value: any, input: IInputFile): File | null {
        return typeof value === 'object' ? value || null : null;
    }
}
