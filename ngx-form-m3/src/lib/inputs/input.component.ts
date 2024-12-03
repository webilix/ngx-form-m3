import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { NgxFormInputs } from '../ngx-form.interface';

import {
    IInputConfig,
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
    @Input({ required: true }) config!: IInputConfig;

    public formControl!: FormControl;

    ngOnInit(): void {
        this.formControl = this.formGroup.get(this.input.name) as FormControl;
    }
}
