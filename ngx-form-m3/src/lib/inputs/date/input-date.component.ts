import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { INgxCalendarDate, NgxCalendarService } from '@webilix/ngx-calendar-m3';
import { NgxHelperDatePipe } from '@webilix/ngx-helper-m3';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputDate } from './input-date.interface';

@Component({
    host: { selector: 'input-date' },
    imports: [ReactiveFormsModule, MatFormField, MatIcon, MatInputModule, InputErrorPipe, MultiLinePipe, NgxHelperDatePipe],
    templateUrl: './input-date.component.html',
    styleUrl: './input-date.component.scss',
})
export class InputDateComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputDate = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    constructor(private readonly ngxCalendarService: NgxCalendarService) {}

    setDate(): void {
        if (this.formControl.disabled) return;

        const minDate: Date | undefined = this.input.minDate === 'NOW' ? new Date() : this.input.minDate;
        const maxDate: Date | undefined = this.input.maxDate === 'NOW' ? new Date() : this.input.maxDate;
        this.ngxCalendarService
            .getDate({ title: this.input.title || 'تاریخ', value: this.formControl.value, minDate, maxDate })
            .dialog((data: INgxCalendarDate) => {
                this.formControl.setValue(data.date);
                this.formControl.markAsTouched();
            });
    }
}
