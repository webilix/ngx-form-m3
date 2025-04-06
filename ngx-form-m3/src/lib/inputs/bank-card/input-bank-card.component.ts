import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper, IBank } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputBankCard } from './input-bank-card.interface';

@Component({
    host: { selector: 'input-bank-card' },
    imports: [
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
    templateUrl: './input-bank-card.component.html',
    styleUrl: './input-bank-card.component.scss',
})
export class InputBankCardComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputBankCard = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public bank: string = '';

    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');

    ngOnInit(): void {
        this.setBank(this.input.value || '');
    }

    setBank(card: string): void {
        card = card.replace(/-/g, '').substring(0, 6);

        const bank: IBank | null = Helper.BANK.findCard(card);
        this.bank = bank?.title || '';
    }
}
