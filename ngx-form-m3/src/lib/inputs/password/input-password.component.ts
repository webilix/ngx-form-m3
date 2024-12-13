import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputPassword } from './input-password.interface';

@Component({
    host: { selector: 'input-password' },
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
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputPassword = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    public focused: boolean = false;
    public showPassword: boolean = false;
}
