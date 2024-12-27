import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { INgxCalendarWeek, NgxCalendarService } from '@webilix/ngx-calendar-m3';
import { NgxHelperDatePipe } from '@webilix/ngx-helper-m3';

interface IWeek {
    readonly from: Date;
    readonly to: Date;
}

@Component({
    selector: 'week',
    imports: [MatIcon, MatIconButton, NgxHelperDatePipe],
    templateUrl: './week.component.html',
    styleUrl: './week.component.scss',
})
export class WeekComponent {
    @Input({ required: true }) weeks!: IWeek[];
    @Output() weeksChange: EventEmitter<IWeek[]> = new EventEmitter<IWeek[]>();

    constructor(private readonly ngxCalendarService: NgxCalendarService) {}

    next(): void {
        this.weeks = this.weeks.sort((w1, w2) => w1.from.getTime() - w2.from.getTime());
        this.weeksChange.next(this.weeks);
    }

    add(): void {
        this.ngxCalendarService.getWeek().dialog((week: INgxCalendarWeek) => {
            this.weeks.push(week.period);
            this.next();
        });
    }

    delete(index: number): void {
        this.weeks.splice(index, 1);
        this.next();
    }
}
