import { Component, Input } from '@angular/core';
import { DecimalPipe, NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoFocusDirective, AutoHeightDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputTextarea } from './input-textarea.interface';

@Component({
    selector: 'input-textarea',
    imports: [
        DecimalPipe,
        NgClass,
        ReactiveFormsModule,
        MatFormField,
        MatInputModule,
        AutoFocusDirective,
        AutoHeightDirective,
        InputErrorPipe,
    ],
    templateUrl: './input-textarea.component.html',
    styleUrl: './input-textarea.component.scss',
})
export class InputTextareaComponent {
    @Input({ required: true }) formControl!: FormControl;
    @Input({ required: true }) input!: IInputTextarea;
    @Input({ required: true }) config!: IInputConfig;

    public focused: boolean = false;
}
