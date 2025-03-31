import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputName } from './input-name.interface';

@Component({
    host: { selector: 'input-name' },
    imports: [ReactiveFormsModule, MatFormField, MatInputModule, AutoCompleteDirective, AutoFocusDirective, InputErrorPipe],
    templateUrl: './input-name.component.html',
    styleUrl: './input-name.component.scss',
})
export class InputNameComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputName = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public firstFormControl!: FormControl;
    public lastFormControl!: FormControl;

    ngOnInit(): void {
        const value: { first: string; last: string } | null = this.formControl.value;
        const first: string | null = value?.first || null;
        const last: string | null = value?.last || null;

        this.firstFormControl = new FormControl<string | null>(first, this.input.optional ? [] : [Validators.required]);
        this.lastFormControl = new FormControl<string | null>(last, this.input.optional ? [] : [Validators.required]);

        this.formControl.statusChanges.subscribe({
            next: () => {
                if (this.formControl.disabled) {
                    this.firstFormControl.disable();
                    this.lastFormControl.disable();
                } else {
                    this.firstFormControl.enable();
                    this.lastFormControl.enable();
                }
            },
        });
    }

    setName(): void {
        const first: string = (this.firstFormControl.value || '').trim();
        const last: string = (this.lastFormControl.value || '').trim();

        const value: { first: string; last: string } | null = first !== '' && last !== '' ? { first, last } : null;
        this.formControl.setValue(value);
    }
}
