import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { INgxCalendarDate, NgxCalendarService } from '@webilix/ngx-calendar-m3';
import { NgxHelperDatePipe } from '@webilix/ngx-helper-m3';

@Component({
    selector: 'date',
    imports: [MatIcon, MatIconButton, NgxHelperDatePipe],
    templateUrl: './date.component.html',
    styleUrl: './date.component.scss',
})
export class DateComponent {
    @Input({ required: true }) dates!: Date[];
    @Output() datesChange: EventEmitter<Date[]> = new EventEmitter<Date[]>();

    constructor(private readonly ngxCalendarService: NgxCalendarService) {}

    next(): void {
        this.dates = this.dates.sort((d1, d2) => d1.getTime() - d2.getTime());
        this.datesChange.next(this.dates);
    }

    add(): void {
        this.ngxCalendarService.getDate().dialog((date: INgxCalendarDate) => {
            this.dates.push(date.date);
            this.next();
        });
    }

    delete(index: number): void {
        this.dates.splice(index, 1);
        this.next();
    }
}
