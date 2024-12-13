import { Component, inject } from '@angular/core';
import { DecimalPipe, NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoFocusDirective, AutoHeightDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputTextarea } from './input-textarea.interface';

@Component({
    host: { selector: 'input-textarea' },
    imports: [
        DecimalPipe,
        NgClass,
        ReactiveFormsModule,
        MatFormField,
        MatInputModule,
        AutoFocusDirective,
        AutoHeightDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-textarea.component.html',
    styleUrl: './input-textarea.component.scss',
})
export class InputTextareaComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputTextarea = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    public focused: boolean = false;
}
