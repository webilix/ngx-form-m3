import { Component, inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';
import { MaskitoDirective } from '@maskito/angular';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputMobile } from './input-mobile.interface';

@Component({
    host: { selector: 'input-mobile' },
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        MaskitoDirective,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-mobile.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './input-mobile.component.scss',
})
export class InputMobileComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputMobile = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    protected readonly maskitoOptions: MaskitoOptions = {
        mask: [
            ...Array.from<RegExp>({ length: 2 }).fill(/\d/),
            '-',
            ...Array.from<RegExp>({ length: 3 }).fill(/\d/),
            '-',
            ...Array.from<RegExp>({ length: 4 }).fill(/\d/),
        ],
        preprocessors: [
            // CHANGE PERSIAN NUMBERS
            ({ elementState, data }) => ({ elementState, data: Helper.STRING.changeNumbers(data.toString(), 'EN') }),
        ],
    };

    setValue(): void {
        const value: string = (this.formControl.value || '').replace(/-/g, '');
        if (Helper.IS.STRING.mobile('09' + value)) this.formControl.setValue(value);
    }
}
