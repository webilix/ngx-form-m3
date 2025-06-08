import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkDragHandle } from '@angular/cdk/drag-drop';

import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

import { AutoFocusDirective } from '../../directives';

@Component({
    selector: 'list-item',
    imports: [CdkDragHandle, FormsModule, MatIcon, MatIconButton, MatInput, AutoFocusDirective],
    templateUrl: './list-item.component.html',
    styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
    @Input({ required: true }) value!: string;
    @Input({ required: true }) english!: boolean;
    @Input({ required: true }) disabled!: boolean;
    @Input({ required: true }) disableSort!: boolean;

    @Output() onUpdate: EventEmitter<string> = new EventEmitter<string>();
    @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

    public view: 'VALUE' | 'UPDATE' | 'DELETE' = 'VALUE';

    checkValue(input: HTMLInputElement): void {
        if (this.disabled) return;

        const value: string = input.value.trim();
        if (value !== '' && value !== this.value) this.onUpdate.next(value);
        this.view = 'VALUE';
    }
}
