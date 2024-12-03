import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatFormFieldAppearance } from '@angular/material/form-field';

import { NgxFormInputs } from '../ngx-form.interface';

import {
    InputEmailComponent,
    InputMobileComponent,
    InputNameComponent,
    InputPasswordComponent,
    InputTextareaComponent,
    InputTextComponent,
} from '.';

@Component({
    selector: 'form-input',
    imports: [
        InputEmailComponent,
        InputMobileComponent,
        InputNameComponent,
        InputPasswordComponent,
        InputTextComponent,
        InputTextareaComponent,
    ],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
    @Input({ required: true }) formGroup!: FormGroup;
    @Input({ required: true }) input!: NgxFormInputs;
    @Input({ required: true }) appearance?: MatFormFieldAppearance;
    @Input({ required: true }) enStyle!: { [key: string]: any };
    @Input({ required: true }) descriptionStyle!: { [key: string]: any };
    @Input({ required: true }) autoFocus?: string;

    public formControl!: FormControl;

    ngOnInit(): void {
        this.appearance = this.input.appearance || this.appearance;
        this.formControl = this.formGroup.get(this.input.name) as FormControl;
    }
}
