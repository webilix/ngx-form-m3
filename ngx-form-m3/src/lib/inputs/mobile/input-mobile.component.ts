import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputMobile } from './input-mobile.interface';

@Component({
    selector: 'input-mobile',
    imports: [
        NgClass,
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
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
    @Input({ required: true }) input!: IInputMobile;
    @Input({ required: true }) config!: IInputConfig;

    public focused: boolean = false;
    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');
}
