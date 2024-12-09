import { Component, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputEmail } from './input-email.interface';

@Component({
    host: { selector: 'input-email' },
    imports: [
        NgClass,
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatInputModule,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-email.component.html',
    styleUrl: './input-email.component.scss',
})
export class InputEmailComponent {
    public focused: boolean = false;

    constructor(
        @Inject('formControl') public readonly formControl: FormControl,
        @Inject('input') public readonly input: IInputEmail,
        @Inject('config') public readonly config: IInputConfig,
    ) {}
}
