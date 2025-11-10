import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { Helper } from '@webilix/helper-library';
import { INgxCalendarWeek, NgxCalendarService } from '@webilix/ngx-calendar-m3';
import { NGX_FORM_CONTROL, NGX_FORM_INPUT, NgxFormInputs } from '@webilix/ngx-form-m3';
import { NgxHelperDatePipe } from '@webilix/ngx-helper-m3';

@Component({
    host: { selector: 'week' },
    imports: [MatIcon, MatIconButton, NgxHelperDatePipe],
    templateUrl: './week.component.html',
    styleUrl: './week.component.scss',
})
export class WeekComponent implements OnInit {
    @HostBinding('style.--top') protected top: string = '-1rem';

    public formControl: FormControl = inject(NGX_FORM_CONTROL);
    public input: NgxFormInputs = inject(NGX_FORM_INPUT);

    public weeks: Date[] = [];
    private firstCheck: boolean = true;

    constructor(private readonly ngxCalendarService: NgxCalendarService) {}

    ngOnInit(): void {
        this.top = this.input.appearance === 'fill' ? '-1rem' : '-0.5rem';

        this.formControl.valueChanges.subscribe({
            next: () => {
                if (!this.firstCheck) this.formControl.markAsTouched();

                this.firstCheck = false;
                this.getValue();
            },
        });

        this.getValue();
        this.setValue();
    }

    getValue(): void {
        const value: Date[] = this.formControl.value || [];
        this.weeks = value.filter((v: Date) => Helper.IS.date(v));
    }

    setValue(): void {
        if (this.formControl.disabled) return;

        this.weeks = this.weeks.sort((w1, w2) => w1.getTime() - w2.getTime());
        this.formControl.setValue(this.weeks.length === 0 ? null : [...this.weeks]);
    }

    add(): void {
        this.ngxCalendarService.getWeek().dialog((week: INgxCalendarWeek) => {
            this.weeks.push(week.period.from);
            this.setValue();
        });
    }

    delete(index: number): void {
        this.weeks.splice(index, 1);
        this.setValue();
    }
}
