import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputCheckbox } from './input-checkbox.interface';

@Component({
    host: { selector: 'input-checkbox' },
    imports: [ReactiveFormsModule, MatFormField, MatIcon, MatIconButton, MatInputModule, InputErrorPipe, MultiLinePipe],
    templateUrl: './input-checkbox.component.html',
    styleUrl: './input-checkbox.component.scss',
})
export class InputCheckboxComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputCheckbox = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    toggleValue(): void {
        const value: boolean = !!this.formControl.value;
        this.formControl.setValue(!value);
        this.formControl.markAsTouched();
    }
}
