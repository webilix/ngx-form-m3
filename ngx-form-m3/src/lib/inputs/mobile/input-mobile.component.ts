import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputMobile } from './input-mobile.interface';

@Component({
    host: { selector: 'input-mobile' },
    imports: [
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
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputMobile = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');
}
