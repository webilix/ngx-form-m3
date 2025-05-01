import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputPrice } from './input-price.interface';

@Component({
    host: { selector: 'input-price' },
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        NgxMaskDirective,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    providers: [provideNgxMask()],
    templateUrl: './input-price.component.html',
    styleUrl: './input-price.component.scss',
})
export class InputPriceComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputPrice = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public maxLength: number = 15;
    public hintText?: string;
    public isFocused: boolean = false;

    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');

    ngOnInit(): void {
        if (!this.input.fractionDigits && this.input.maximum)
            this.maxLength = Helper.NUMBER.format(this.input.maximum, 'EN').length;

        this.updateHint();
    }

    setValue(input: string): void {
        const value: number | null = input.length === 0 ? null : +input.replace(/,/gi, '');
        this.formControl.setValue(Helper.IS.number(value) ? value : null);
        this.formControl.markAllAsTouched();
    }

    updateHint(): void {
        const value: number = this.formControl.value;
        this.hintText =
            this.input.hideText || !Helper.IS.number(value)
                ? undefined
                : Helper.NUMBER.getTitle(Math.abs(value)) + (this.input.currency ? ` ${this.input.currency}` : '');
    }
}
