import { Component, computed, inject, Input, model, ModelSignal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COMMA, ENTER, PERIOD } from '@angular/cdk/keycodes';

import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatIconButton } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputTag } from './input-tag.interface';

@Component({
    host: { selector: 'input-tag' },
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-tag.component.html',
    styleUrl: './input-tag.component.scss',
})
export class InputTagComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputTag = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public separatorKeysCodes: number[] = [ENTER, COMMA, PERIOD];
    public inputValue: ModelSignal<string> = model('');
    public tags: string[] = Array.isArray(this.formControl.value) ? this.formControl.value : [];

    public filteredTags = computed(() => {
        let options: string[] = this.input.tags
            .filter((tag) => !this.tags.includes(tag))
            .filter((t, i, a) => a.indexOf(t) === i);
        if (this.input.orderList) options = options.sort((t1, t2) => t1.localeCompare(t2));

        const value: string = this.inputValue().toLowerCase();
        return value ? options.filter((option) => option.toLowerCase().includes(value)) : options;
    });

    setValues(): void {
        this.tags = this.tags.sort((t1, t2) => t1.localeCompare(t2));
        this.formControl.setValue(this.tags.length === 0 ? null : this.tags);
        this.formControl.markAsTouched();

        this.inputValue.set('');
    }

    addTag(event: MatChipInputEvent): void {
        const value: string = (event.value || '').trim();
        if (!value || this.tags.includes(value)) return;

        this.tags.push(value);
        this.setValues();
    }

    removeTag(tag: string): void {
        if (!this.tags.includes(tag)) return;

        this.tags = this.tags.filter((t) => t !== tag);
        this.setValues();
    }

    selectTag(event: MatAutocompleteSelectedEvent): void {
        const value: string = event.option.viewValue;
        if (!value || this.tags.includes(value)) return;

        this.tags.push(value);
        this.setValues();
        event.option.deselect();
    }
}
