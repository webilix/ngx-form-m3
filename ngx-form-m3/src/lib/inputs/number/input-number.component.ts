import { Component, inject, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';
import { MaskitoDirective } from '@maskito/angular';
import { maskitoNumber } from '@maskito/kit';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputNumber } from './input-number.interface';

@Component({
    host: { selector: 'input-number' },
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        MaskitoDirective,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-number.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './input-number.component.scss',
})
export class InputNumberComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputNumber = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    protected hintText?: string;
    protected isFocused: boolean = false;
    protected maskitoOptions!: MaskitoOptions;

    ngOnInit(): void {
        const numberOptions: MaskitoOptions = maskitoNumber({
            thousandSeparator: ',',
            // Fraction Digits
            decimalSeparator: '.',
            maximumFractionDigits: this.input.fractionDigits === true ? 10 : this.input.fractionDigits || 0,
            // Allow Negatives
            minusSign: '-',
            min: this.input.allowNegatives ? -999_999_999_999_999 : 0,
            max: 999_999_999_999_999,
        });
        this.maskitoOptions = {
            ...numberOptions,
            preprocessors: [
                // CHANGE PERSIAN NUMBERS
                ({ elementState, data }) => ({ elementState, data: Helper.STRING.changeNumbers(data.toString(), 'EN') }),
                ...(numberOptions.preprocessors || []),
            ],
        };

        this.updateHint();
    }

    setValue(input: string): void {
        const value: number | null = input.length === 0 ? null : +input.replace(/,/gi, '');
        this.formControl.setValue(Helper.IS.number(value) ? value : null);
        this.formControl.markAllAsTouched();
    }

    updateHint(): void {
        const value: number = this.formControl.value;
        if (!this.input.showText || !Helper.IS.number(value)) {
            this.hintText = undefined;
            return;
        }

        const isNegative: boolean = value < 0;
        this.hintText = (isNegative ? 'منفی ' : '') + Helper.NUMBER.getTitle(Math.abs(value));
    }
}
