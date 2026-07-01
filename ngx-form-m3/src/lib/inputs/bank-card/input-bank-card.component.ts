import { Component, inject, Input, OnInit, signal, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';
import { MaskitoDirective } from '@maskito/angular';

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
        MaskitoDirective,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-bank-card.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './input-bank-card.component.scss',
})
export class InputBankCardComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputBankCard = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public bank: WritableSignal<string> = signal('');

    protected readonly maskitoOptions: MaskitoOptions = {
        mask: [
            ...Array.from<RegExp>({ length: 4 }).fill(/\d/),
            '-',
            ...Array.from<RegExp>({ length: 4 }).fill(/\d/),
            '-',
            ...Array.from<RegExp>({ length: 4 }).fill(/\d/),
            '-',
            ...Array.from<RegExp>({ length: 4 }).fill(/\d/),
        ],
        preprocessors: [
            // CHANGE PERSIAN NUMBERS
            ({ elementState, data }) => ({ elementState, data: Helper.STRING.changeNumbers(data.toString(), 'EN') }),
        ],
    };

    ngOnInit(): void {
        this.setCard(this.input.value || '');
    }

    setValue(): void {
        const value: string = (this.formControl.value || '').replace(/-/g, '');
        if (Helper.IS.STRING.bankCard(value)) this.formControl.setValue(value);
    }

    setCard(card: string): void {
        card = card.replace(/-/g, '').substring(0, 6);
        const bank: IBank | null = Helper.BANK.findCard(card);
        this.bank.set(bank?.title || '');
    }
}
