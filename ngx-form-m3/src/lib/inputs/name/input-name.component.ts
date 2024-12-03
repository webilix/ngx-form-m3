import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IFormInputName } from './input-name.interface';

@Component({
    selector: 'input-name',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
    ],
    templateUrl: './input-name.component.html',
    styleUrl: './input-name.component.scss',
})
export class InputNameComponent implements OnInit {
    @Input({ required: true }) formControl!: FormControl;
    @Input({ required: true }) input!: IFormInputName;
    @Input({ required: true }) appearance?: MatFormFieldAppearance;
    @Input({ required: true }) autoFocus?: string;

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