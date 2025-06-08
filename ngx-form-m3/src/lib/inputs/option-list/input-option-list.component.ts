import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormOptionList } from '../../ngx-form.inputs';
import { INgxFormValues } from '../../ngx-form.interface';
import { ListInputComponent } from '../../components/list-input/list-input.component';
import { ListItemComponent } from '../../components/list-item/list-item.component';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputOptionList } from './input-option-list.interface';

@Component({
    host: { selector: 'input-option-list' },
    imports: [
        DragDropModule,
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        InputErrorPipe,
        MultiLinePipe,
        ListInputComponent,
        ListItemComponent,
    ],
    templateUrl: './input-option-list.component.html',
    styleUrl: './input-option-list.component.scss',
})
export class InputOptionListComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputOptionList = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public focused: boolean = false;
    public options: INgxFormOptionList[] = [];

    ngOnInit(): void {
        this.options = Array.isArray(this.formControl.value) ? this.formControl.value : [];
    }

    setValue(): void {
        this.formControl.setValue([...this.options]);
        this.formControl.markAsTouched();
    }

    dropOption(event: CdkDragDrop<string>): void {
        if (event.previousIndex === event.currentIndex) return;

        moveItemInArray(this.options, event.previousIndex, event.currentIndex);
        this.setValue();
    }

    addOption(title: string): void {
        this.options.push({ id: null, title });
        this.setValue();
    }

    updateOption(index: number, title: string): void {
        if (!this.options[index]) return;

        const option: INgxFormOptionList = { id: this.options[index].id, title };
        this.options.splice(index, 1, option);
        this.setValue();
    }

    deleteOption(index: number): void {
        if (!this.options[index]) return;

        this.options.splice(index, 1);
        this.setValue();
    }
}
