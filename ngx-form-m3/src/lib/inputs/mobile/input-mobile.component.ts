import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Helper } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IFormInputMobile } from './input-mobile.interface';

@Component({
    selector: 'input-mobile',
    imports: [
        NgStyle,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgxMaskDirective,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
    ],
    providers: [provideNgxMask()],
    templateUrl: './input-mobile.component.html',
    styleUrl: './input-mobile.component.scss',
})
export class InputMobileComponent {
    @Input({ required: true }) formControl!: FormControl;
    @Input({ required: true }) input!: IFormInputMobile;
    @Input({ required: true }) appearance?: MatFormFieldAppearance;
    @Input({ required: true }) enStyle!: { [key: string]: any };
    @Input({ required: true }) autoFocus?: string;

    public focused: boolean = false;
    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');
}
