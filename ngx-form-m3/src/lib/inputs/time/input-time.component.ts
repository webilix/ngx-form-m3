import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatIconButton, MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputTime } from './input-time.interface';

@Component({
    host: { selector: 'input-time' },
    imports: [
        ReactiveFormsModule,
        MatButton,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-time.component.html',
    styleUrl: './input-time.component.scss',
})
export class InputTimeComponent implements OnInit, OnChanges {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputTime = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public hour: string = '--';
    public hours: string[] = [...Array(24).keys()].map((hour: number) => hour.toString().padStart(2, '0'));

    public minute: string = '--';
    public minutes: string[] = [...Array(60).keys()].map((minute: number) => minute.toString().padStart(2, '0'));

    public second: string = '--';
    public seconds: string[] = [...Array(60).keys()].map((minute: number) => minute.toString().padStart(2, '0'));

    ngOnInit(): void {
        if (!this.input.value) return;

        const value: string[] = this.input.value.split(':');
        this.hour = value[0];
        this.minute = value[1];
        this.second = this.input.showSeconds ? value[2] : '00';
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.hour !== '--' && !this.formControl.value) this.resetTime();
    }

    setValue(): void {
        const value: string | null = this.hour === '--' ? null : [this.hour, this.minute, this.second].join(':');
        this.formControl.setValue(value);
        this.formControl.markAsTouched();
    }

    resetTime(): void {
        this.hour = '--';
        this.minute = '--';
        this.second = '--';
        this.setValue();
    }

    setNow(): void {
        const now: Date = new Date();

        this.hour = now.getHours().toString().padStart(2, '0');
        this.minute = now.getMinutes().toString().padStart(2, '0');
        this.second = this.input.showSeconds ? now.getSeconds().toString().padStart(2, '0') : '00';
        this.setValue();
    }

    setHour(hour: string): void {
        this.hour = hour;
        this.minute = this.minute === '--' ? '00' : this.minute;
        this.second = this.input.showSeconds ? (this.second === '--' ? '00' : this.minute) : '00';
        this.setValue();
    }

    setMinute(minute: string): void {
        if (this.hour === '--') return;

        this.minute = minute;
        this.setValue();
    }

    setSecond(second: string): void {
        if (this.hour === '--' || !this.input.showSeconds) return;

        this.second = second;
        this.setValue();
    }
}
