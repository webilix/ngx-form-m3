import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputSelect } from './input-select.interface';

@Component({
    host: { selector: 'input-select' },
    imports: [
        NgClass,
        ReactiveFormsModule,
        MatFormField,
        MatInputModule,
        MatSelectModule,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-select.component.html',
    styleUrl: './input-select.component.scss',
})
export class InputSelectComponent {
    public focused: boolean = false;

    constructor(
        @Inject('formControl') public readonly formControl: FormControl,
        @Inject('input') public readonly input: IInputSelect,
        @Inject('config') public readonly config: IInputConfig,
    ) {}

    getTitle(): string {
        return this.input.options.find((option) => option.id === this.formControl.value)?.title || '';
    }
}
