import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

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
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputEmail = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);
}
