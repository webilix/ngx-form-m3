import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputMultiSelect } from './input-multi-select.interface';

@Component({
    host: { selector: 'input-multi-select' },
    imports: [
        ReactiveFormsModule,
        MatButton,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        MatMenuModule,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-multi-select.component.html',
    styleUrl: './input-multi-select.component.scss',
})
export class InputMultiSelectComponent implements OnInit {
    @HostBinding('style.--listHeight') listHeight!: string;

    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputMultiSelect = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public ids: string[] = this.formControl.value || [];

    ngOnInit(): void {
        this.listHeight = `${this.input.listMaxHeight || 310}px`;
    }

    select(type: 'ALL' | 'NONE'): void {
        this.ids = type === 'NONE' ? [] : this.input.options.map((option) => option.id);
        this.formControl.setValue(this.ids.length === 0 ? null : this.ids);
        this.formControl.markAsTouched();
    }

    selectGroup(index: number): void {
        const group = this.input.groups?.[index];
        if (!group) return;

        const ids: string[] = this.input.options.map((option) => option.id);
        this.ids = group.ids.filter((id: string) => ids.includes(id));

        this.formControl.setValue(this.ids.length === 0 ? null : this.ids);
        this.formControl.markAsTouched();
    }

    toggleValue(id: string): void {
        if (!this.ids.includes(id)) this.ids.push(id);
        else this.ids = this.ids.filter((i) => i !== id);

        this.formControl.setValue(this.ids.length === 0 ? null : this.ids);
        this.formControl.markAsTouched();
    }
}
