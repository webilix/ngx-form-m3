import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { INgxCalendarDate, NgxCalendarService } from '@webilix/ngx-calendar-m3';
import { NgxHelperDatePipe } from '@webilix/ngx-helper-m3';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputDate } from './input-date.interface';

@Component({
    host: { selector: 'input-date' },
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        InputErrorPipe,
        MultiLinePipe,
        NgxHelperDatePipe,
    ],
    templateUrl: './input-date.component.html',
    styleUrl: './input-date.component.scss',
})
export class InputDateComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputDate = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    constructor(private readonly ngxCalendarService: NgxCalendarService) {}

    setDate(): void {
        if (this.formControl.disabled) return;

        this.ngxCalendarService
            .getDate({
                title: this.input.title || 'تاریخ',
                value: this.formControl.value,
                minDate: this.input.minDate,
                maxDate: this.input.maxDate,
            })
            .dialog(
                (data: INgxCalendarDate) => {
                    this.formControl.setValue(data.date);
                    this.formControl.markAsTouched();
                },
                () => this.formControl.markAsTouched(),
            );
    }
}
