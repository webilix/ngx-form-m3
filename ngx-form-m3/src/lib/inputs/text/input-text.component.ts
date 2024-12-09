import { Component, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputText } from './input-text.interface';

@Component({
    host: { selector: 'input-text' },
    imports: [
        NgClass,
        ReactiveFormsModule,
        MatFormField,
        MatInputModule,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-text.component.html',
    styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
    public focused: boolean = false;

    constructor(
        @Inject('formControl') public readonly formControl: FormControl,
        @Inject('input') public readonly input: IInputText,
        @Inject('config') public readonly config: IInputConfig,
    ) {}
}
