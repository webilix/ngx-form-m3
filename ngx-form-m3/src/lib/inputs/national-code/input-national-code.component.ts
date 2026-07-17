import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';
import { MaskitoDirective } from '@maskito/angular';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputNationalCode } from './input-national-code.interface';

@Component({
    host: { selector: 'input-national-code' },
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        MaskitoDirective,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-national-code.component.html',
    styleUrl: './input-national-code.component.scss',
})
export class InputNationalCodeComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputNationalCode = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    protected readonly maskitoOptions: MaskitoOptions = {
        mask: Array.from<RegExp>({ length: 10 }).fill(/\d/),
        preprocessors: [
            // CHANGE PERSIAN NUMBERS
            ({ elementState, data }) => ({ elementState, data: Helper.STRING.changeNumbers(data.toString(), 'EN') }),
        ],
    };
}
