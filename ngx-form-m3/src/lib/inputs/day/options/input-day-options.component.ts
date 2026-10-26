import { Component, inject } from '@angular/core';

import { NGX_HELPER_CONTAINER_CLOSE, NGX_HELPER_CONTAINER_DATA } from '@webilix/ngx-helper-m3';

@Component({
    imports: [],
    host: { selector: 'lib-input-day-options' },
    styleUrl: './input-day-options.component.scss',
    templateUrl: './input-day-options.component.html',
})
export class InputDayOptionsComponent {
    private readonly closeContainer = inject(NGX_HELPER_CONTAINER_CLOSE) as (data?: any) => void;
    private readonly containerData: { options: { id: string; title: string }[]; column: number; current: string } =
        inject(NGX_HELPER_CONTAINER_DATA);

    protected readonly options: { id: string; title: string }[] = this.containerData.options;
    protected readonly column: number = this.containerData.column;
    protected readonly current: string = this.containerData.current;

    select(id: string): void {
        this.closeContainer(id);
    }
}
