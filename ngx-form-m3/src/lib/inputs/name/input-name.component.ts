import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputName } from './input-name.interface';

@Component({
    host: { selector: 'input-name' },
    imports: [ReactiveFormsModule, MatFormField, MatInputModule, AutoCompleteDirective, AutoFocusDirective, InputErrorPipe],
    templateUrl: './input-name.component.html',
    styleUrl: './input-name.component.scss',
})
export class InputNameComponent implements OnInit {
    public firstFormControl!: FormControl;
    public lastFormControl!: FormControl;

    constructor(
        @Inject('formControl') public readonly formControl: FormControl,
        @Inject('input') public readonly input: IInputName,
        @Inject('config') public readonly config: IInputConfig,
    ) {}

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
