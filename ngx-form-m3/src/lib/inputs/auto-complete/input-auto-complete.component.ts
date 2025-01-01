import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputAutoComplete } from './input-auto-complete.interface';

@Component({
    host: { selector: 'input-auto-complete' },
    imports: [
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        AutoCompleteDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-auto-complete.component.html',
    styleUrl: './input-auto-complete.component.scss',
})
export class InputAutoCompleteComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputAutoComplete = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public filtered: string[] = [];

    ngOnInit(): void {
        this.filter();
    }

    filter(): void {
        const value: string = (this.formControl.value || '').toString().trim();
        this.filtered = this.input.options.filter((option) => option.indexOf(value) !== -1);
    }
}
