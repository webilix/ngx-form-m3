import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoFocusDirective, AutoHeightDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IFormInputTextarea } from './input-textarea.interface';

@Component({
    selector: 'input-textarea',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        AutoFocusDirective,
        AutoHeightDirective,
        InputErrorPipe,
    ],
    templateUrl: './input-textarea.component.html',
    styleUrl: './input-textarea.component.scss',
})
export class InputTextareaComponent {
    @Input({ required: true }) formControl!: FormControl;
    @Input({ required: true }) input!: IFormInputTextarea;
    @Input({ required: true }) appearance?: MatFormFieldAppearance;
    @Input({ required: true }) enStyle!: { [key: string]: any };
    @Input({ required: true }) autoFocus?: string;

    public focused: boolean = false;
}
