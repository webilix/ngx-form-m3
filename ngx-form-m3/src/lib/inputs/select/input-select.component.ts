import { Component, inject, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputSelect } from './input-select.interface';

@Component({
    host: { selector: 'input-select' },
    imports: [
        NgClass,
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        MatSelectModule,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-select.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './input-select.component.scss',
})
export class InputSelectComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputSelect = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    protected searchQuery: string = '';
    protected optionCount: number = 0;

    ngOnInit(): void {
        this.input.options.forEach((option) => {
            this.optionCount += 'group' in option ? option.options.length : 1;
        });
    }

    getTitle(): string {
        const value = this.formControl.value;
        let title: string = '';
        this.input.options.forEach((option) => {
            // GROUP
            if ('group' in option) {
                const item = option.options.find((o) => o.id === value);
                if (item) title = item.title;
            }
            // OPTION
            if ('id' in option && option.id === value) title = option.title;
        });

        return title;
    }
}
