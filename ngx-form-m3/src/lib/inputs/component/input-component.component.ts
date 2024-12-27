import { NgComponentOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';

import { INPUT_TYPE } from '../input.interface';

import { IInputComponent } from './input-component.interface';

@Component({
    host: { selector: 'input-component' },
    imports: [NgComponentOutlet],
    templateUrl: './input-component.component.html',
    styleUrl: './input-component.component.scss',
})
export class InputComponentComponent {
    public input: IInputComponent = inject(INPUT_TYPE);
}
