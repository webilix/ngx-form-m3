import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IFormInputPassword } from './input-password.interface';

@Component({
    selector: 'input-password',
    imports: [
        NgStyle,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        AutoFocusDirective,
        InputErrorPipe,
    ],
    templateUrl: './input-password.component.html',
    styleUrl: './input-password.component.scss',
})
export class InputPasswordComponent {
    @Input({ required: true }) formControl!: FormControl;
    @Input({ required: true }) input!: IFormInputPassword;
    @Input({ required: true }) appearance?: MatFormFieldAppearance;
    @Input({ required: true }) enStyle!: { [key: string]: any };
    @Input({ required: true }) descriptionStyle!: { [key: string]: any };
    @Input({ required: true }) autoFocus?: string;

    public focused: boolean = false;
    public showPassword: boolean = false;
}
