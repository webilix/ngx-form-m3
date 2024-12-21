import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputUrl } from './input-url.interface';

@Component({
    host: { selector: 'input-url' },
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatInputModule,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-url.component.html',
    styleUrl: './input-url.component.scss',
})
export class InputUrlComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputUrl = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);
}
