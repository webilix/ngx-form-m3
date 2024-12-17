import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputColor } from './input-color.interface';

@Component({
    host: { selector: 'input-color' },
    imports: [ReactiveFormsModule, MatFormField, MatIcon, MatInputModule, InputErrorPipe, MultiLinePipe],
    templateUrl: './input-color.component.html',
    styleUrl: './input-color.component.scss',
})
export class InputColorComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputColor = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);
}
