import { Component, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig } from '../input.interface';

import { IInputMobile } from './input-mobile.interface';

@Component({
    host: { selector: 'input-mobile' },
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
        MultiLinePipe,
    ],
    providers: [provideNgxMask()],
    templateUrl: './input-mobile.component.html',
    styleUrl: './input-mobile.component.scss',
})
export class InputMobileComponent {
    public focused: boolean = false;
    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');

    constructor(
        @Inject('formControl') public readonly formControl: FormControl,
        @Inject('input') public readonly input: IInputMobile,
        @Inject('config') public readonly config: IInputConfig,
    ) {}
}
