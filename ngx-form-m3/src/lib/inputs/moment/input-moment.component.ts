import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { INgxCalendarMoment, NgxCalendarService } from '@webilix/ngx-calendar-m3';
import { NgxHelperDatePipe } from '@webilix/ngx-helper-m3';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputMoment } from './input-moment.interface';

@Component({
    host: { selector: 'input-moment' },
    imports: [ReactiveFormsModule, MatFormField, MatIcon, MatInputModule, InputErrorPipe, MultiLinePipe, NgxHelperDatePipe],
    templateUrl: './input-moment.component.html',
    styleUrl: './input-moment.component.scss',
})
export class InputMomentComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputMoment = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    constructor(private readonly ngxCalendarService: NgxCalendarService) {}

    setMoment(): void {
        if (this.formControl.disabled) return;

        const minDate: Date | undefined = this.input.minDate === 'NOW' ? new Date() : this.input.minDate;
        const maxDate: Date | undefined = this.input.maxDate === 'NOW' ? new Date() : this.input.maxDate;
        this.ngxCalendarService
            .getMoment({ title: this.input.title || 'زمان', value: this.formControl.value, minDate, maxDate })
            .dialog(
                (moment: INgxCalendarMoment) => {
                    this.formControl.setValue(moment.moment);
                    this.formControl.markAsTouched();
                },
                () => this.formControl.markAsTouched(),
            );
    }
}
