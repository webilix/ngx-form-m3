import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputPassword } from './input-password.interface';

@Component({
    selector: 'input-password',
    imports: [
        NgClass,
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatInputModule,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
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
