import { Component, inject, Input, WritableSignal, signal, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper } from '@webilix/helper-library';
import { NgxHelperContainerService, NgxHelperDayPipe } from '@webilix/ngx-helper-m3';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { InputDayOptionsComponent } from './options/input-day-options.component';
import { IInputDay } from './input-day.interface';

@Component({
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        InputErrorPipe,
        MultiLinePipe,
        NgxHelperDayPipe,
    ],
    host: { selector: 'lib-input-day' },
    styleUrl: './input-day.component.scss',
    templateUrl: './input-day.component.html',
})
export class InputDayComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputDay = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    protected readonly month: WritableSignal<string> = signal('');
    protected readonly day: WritableSignal<string> = signal('');

    constructor(private readonly ngxHelperContainerService: NgxHelperContainerService) {}

    ngOnInit(): void {
        const value = this.formControl.value as string | undefined;
        if (value && Helper.IS.STRING.day(value)) {
            const [month, day] = value.split('-');
            this.month.set(month);
            this.day.set(day);
        }
    }

    private getMonth(): Promise<string | null> {
        const names: string[] = [
            'فروردین',
            'اردیبهشت',
            'خرداد',
            'تیر',
            'مرداد',
            'شهریور',
            'مهر',
            'آبان',
            'آذر',
            'دی',
            'بهمن',
            'اسفند',
        ];

        const options: { id: string; title: string }[] = names.map((name, index) => ({
            id: (index + 1).toString().padStart(2, '0'),
            title: name,
        }));

        return new Promise((resolve) => {
            this.ngxHelperContainerService
                .init(InputDayOptionsComponent, 'ماه', { data: { options, column: 3, current: this.month() } })
                .dialog<string>(
                    (month) => resolve(month),
                    () => resolve(null),
                );
        });
    }

    getDay(month: string): Promise<string | null> {
        const options: { id: string; title: string }[] = Array.from({ length: +month < 7 ? 31 : 30 }, (_, i) => ({
            id: (i + 1).toString().padStart(2, '0'),
            title: (i + 1).toString(),
        }));

        return new Promise((resolve) => {
            this.ngxHelperContainerService
                .init(InputDayOptionsComponent, 'روز', { data: { options, column: 7, current: this.day() } })
                .dialog<string>(
                    (day) => resolve(day),
                    () => resolve(null),
                );
        });
    }

    resetDay(): void {
        this.month.set('');
        this.day.set('');

        this.formControl.setValue(null);
        this.formControl.markAsTouched();
    }

    setDay(): void {
        this.getMonth().then((month) => {
            if (!month) return;

            this.getDay(month).then((day) => {
                if (!day) return;

                this.month.set(month);
                this.day.set(day);

                this.formControl.setValue(`${month}-${day}`);
                this.formControl.markAsTouched();
            });
        });
    }
}
