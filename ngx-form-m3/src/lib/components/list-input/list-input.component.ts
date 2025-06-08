import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatInput } from '@angular/material/input';

import { AutoFocusDirective } from '../../directives';

@Component({
    selector: 'list-input',
    imports: [MatInput, AutoFocusDirective],
    templateUrl: './list-input.component.html',
    styleUrl: './list-input.component.scss',
})
export class ListInputComponent {
    @Input({ required: true }) english!: boolean;
    @Input({ required: true }) disabled!: boolean;
    @Input({ required: true }) autoFocus!: boolean;

    @Output() onFocus: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onInput: EventEmitter<string> = new EventEmitter<string>();

    checkValue(input: HTMLInputElement): void {
        const value: string = input.value.trim();
        if (this.disabled || value === '') return;

        this.onInput.next(value);
        input.value = '';
    }
}
