import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputEmail } from './input-email.interface';

@Component({
    selector: 'input-email',
    imports: [
        NgClass,
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatInputModule,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
    ],
    templateUrl: './input-email.component.html',
    styleUrl: './input-email.component.scss',
})
export class InputEmailComponent {
    @Input({ required: true }) formControl!: FormControl;
    @Input({ required: true }) input!: IInputEmail;
    @Input({ required: true }) config!: IInputConfig;

    public focused: boolean = false;
}
