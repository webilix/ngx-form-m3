import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IFormInputEmail } from './input-email.interface';

@Component({
    selector: 'input-email',
    imports: [
        NgStyle,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
    ],
    templateUrl: './input-email.component.html',
    styleUrl: './input-email.component.scss',
})
export class InputEmailComponent {
    @Input({ required: true }) formControl!: FormControl;
    @Input({ required: true }) input!: IFormInputEmail;
    @Input({ required: true }) appearance?: MatFormFieldAppearance;
    @Input({ required: true }) enStyle!: { [key: string]: any };
    @Input({ required: true }) autoFocus?: string;

    public focused: boolean = false;
}
