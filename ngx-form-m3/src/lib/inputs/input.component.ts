import { Component, Injector, Input, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { NgxFormInputs } from '../ngx-form.interface';

import { IInputConfig, InputInfo } from '.';

@Component({
    selector: 'form-input',
    imports: [NgComponentOutlet],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
    @Input({ required: true }) formGroup!: FormGroup;
    @Input({ required: true }) input!: NgxFormInputs;
    @Input({ required: true }) config!: IInputConfig;

    public inputInfo = InputInfo;
    public injector!: Injector;

    ngOnInit(): void {
        const formControl: FormControl = this.formGroup.get(this.input.name) as FormControl;

        this.injector = Injector.create({
            providers: [
                { provide: 'formControl', useValue: formControl },
                { provide: 'input', useValue: this.input },
                { provide: 'config', useValue: this.config },
            ],
        });
    }
}
