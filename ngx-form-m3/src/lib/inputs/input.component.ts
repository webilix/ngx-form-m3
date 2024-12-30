import { Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { INgxFormValues, NgxFormInputs } from '../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE, InputInfo } from '.';

@Component({
    selector: 'form-input',
    imports: [NgComponentOutlet],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit, OnChanges {
    @Input({ required: true }) formGroup!: FormGroup;
    @Input({ required: true }) input!: NgxFormInputs;
    @Input({ required: true }) config!: IInputConfig;
    @Input({ required: true }) values!: INgxFormValues;

    public inputInfo = InputInfo;
    public injector!: Injector;
    public isButtonDisabled!: boolean;

    ngOnInit(): void {
        const formControl: FormControl = this.formGroup.get(this.input.name) as FormControl;
        this.injector = Injector.create({
            providers: [
                { provide: INPUT_CONTROL, useValue: formControl },
                { provide: INPUT_TYPE, useValue: this.input },
                { provide: INPUT_CONFIG, useValue: this.config },
            ],
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        const formControl = this.injector?.get(INPUT_CONTROL);

        this.isButtonDisabled =
            'button' in this.input &&
            !!this.input.button &&
            (formControl?.disabled || !!this.input.button.disableOn?.(this.values));
    }
}
