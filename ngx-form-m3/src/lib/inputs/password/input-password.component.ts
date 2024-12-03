import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputPassword } from './input-password.interface';

@Component({
    selector: 'input-password',
    imports: [
        NgClass,
        ReactiveFormsModule,
        MatIconButton,
        MatFormField,
        MatIcon,
        MatInputModule,
        AutoFocusDirective,
        InputErrorPipe,
    ],
    templateUrl: './input-password.component.html',
    styleUrl: './input-password.component.scss',
})
export class InputPasswordComponent {
    @Input({ required: true }) formControl!: FormControl;
    @Input({ required: true }) input!: IInputPassword;
    @Input({ required: true }) config!: IInputConfig;

    public focused: boolean = false;
    public showPassword: boolean = false;
}
