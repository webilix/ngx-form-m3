import { NgComponentOutlet } from '@angular/common';
import { Component, inject, Injector } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { NGX_FORM_CONTROL, NGX_FORM_INPUT } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputComponent } from './input-component.interface';

@Component({
    host: { selector: 'input-component' },
    imports: [NgComponentOutlet, ReactiveFormsModule, MatFormField, MatInputModule, InputErrorPipe, MultiLinePipe],
    templateUrl: './input-component.component.html',
    styleUrl: './input-component.component.scss',
})
export class InputComponentComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputComponent = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    public injector: Injector = Injector.create({
        providers: [
            { provide: NGX_FORM_CONTROL, useValue: this.formControl },
            {
                provide: NGX_FORM_INPUT,
                useValue: { ...this.input, appearance: this.input.appearance || this.config.appearance },
            },
        ],
    });
}
