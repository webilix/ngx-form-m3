import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { Helper } from '@webilix/helper-library';
import { INgxCalendarDate, NgxCalendarService } from '@webilix/ngx-calendar-m3';
import { IInputComponent, NGX_FORM_CONTROL, NGX_FORM_INPUT, NgxFormInputs } from '@webilix/ngx-form-m3';
import { NgxHelperDatePipe } from '@webilix/ngx-helper-m3';

@Component({
    host: { selector: 'date' },
    imports: [MatIcon, MatIconButton, NgxHelperDatePipe],
    templateUrl: './date.component.html',
    styleUrl: './date.component.scss',
})
export class DateComponent implements OnInit {
    @HostBinding('style.--top') top: string = '-1rem';

    @Input({ required: false }) minItems?: number;
    @Input({ required: false }) maxItems?: number;
    @Input({ required: false }) unique?: boolean;

    public formControl: FormControl = inject(NGX_FORM_CONTROL);
    public input: IInputComponent = inject(NGX_FORM_INPUT);

    public dates: Date[] = [];
    private firstCheck: boolean = true;

    constructor(private readonly ngxCalendarService: NgxCalendarService) {}

    ngOnInit(): void {
        this.top = this.input.appearance === 'fill' ? '-1rem' : '-0.5rem';

        this.formControl.valueChanges.subscribe({
            next: () => {
                if (!this.firstCheck) this.formControl.markAsTouched();

                this.firstCheck = false;
                this.getValue();
                this.checkErrors();
            },
        });

        this.getValue();
        this.setValue();
    }

    getValue(): void {
        const value: Date[] = this.formControl.value || [];
        this.dates = value.filter((v: Date) => Helper.IS.date(v));
    }

    setValue(): void {
        if (this.formControl.disabled) return;

        this.dates = this.dates.sort((d1, d2) => d1.getTime() - d2.getTime());
        this.formControl.setValue(this.dates.length === 0 ? null : [...this.dates]);
    }

    checkErrors(): void {
        if (this.formControl.errors !== null) return;
        if (this.input.optional && this.dates.length === 0) return;

        if (this.minItems && this.dates.length < this.minItems) {
            this.formControl.setErrors({ component: `انتخاب حداقل ${this.minItems} مقدار الزامی است.` });
            return;
        }

        if (this.maxItems && this.dates.length > this.maxItems) {
            this.formControl.setErrors({ component: `امکان انتخاب بیش از ${this.maxItems} مقدار وجود ندارد.` });
            return;
        }

        if (this.unique && !Helper.IS.ARRAY.unique(this.dates, (date: Date) => date.getTime())) {
            this.formControl.setErrors({ component: 'امکان انتخاب مقادیر تکراری وجود ندارد.' });
            return;
        }
    }

    add(): void {
        this.ngxCalendarService.getDate().dialog((date: INgxCalendarDate) => {
            this.dates.push(date.date);
            this.setValue();
        });
    }

    delete(index: number): void {
        this.dates.splice(index, 1);
        this.setValue();
    }
}
