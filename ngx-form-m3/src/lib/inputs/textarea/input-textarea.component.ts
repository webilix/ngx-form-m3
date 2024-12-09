import { Component, Inject } from '@angular/core';
import { DecimalPipe, NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoFocusDirective, AutoHeightDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

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
    public focused: boolean = false;

    constructor(
        @Inject('formControl') public readonly formControl: FormControl,
        @Inject('input') public readonly input: IInputTextarea,
        @Inject('config') public readonly config: IInputConfig,
    ) {}
}
