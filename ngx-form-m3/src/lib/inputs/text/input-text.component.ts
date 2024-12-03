import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IFormInputText } from './input-text.interface';

@Component({
    selector: 'input-text',
    imports: [
        NgStyle,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
    ],
    templateUrl: './input-text.component.html',
    styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
    @Input({ required: true }) formControl!: FormControl;
    @Input({ required: true }) input!: IFormInputText;
    @Input({ required: true }) appearance?: MatFormFieldAppearance;
    @Input({ required: true }) enStyle!: { [key: string]: any };
    @Input({ required: true }) descriptionStyle!: { [key: string]: any };
    @Input({ required: true }) autoFocus?: string;

    public focused: boolean = false;
}
