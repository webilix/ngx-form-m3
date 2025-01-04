import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { INgxHelperCoordinates, NgxHelperCoordinatesService } from '@webilix/ngx-helper-m3';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputCoordinates } from './input-coordinates.interface';

@Component({
    host: { selector: 'input-coordinates' },
    imports: [ReactiveFormsModule, MatFormField, MatIcon, MatIconButton, MatInputModule, InputErrorPipe, MultiLinePipe],
    templateUrl: './input-coordinates.component.html',
    styleUrl: './input-coordinates.component.scss',
})
export class InputCoordinatesComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputCoordinates = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public coordinates?: INgxHelperCoordinates = this.formControl.value || undefined;

    constructor(private readonly ngxHelperCoordinatesService: NgxHelperCoordinatesService) {}

    setCoordinates(): void {
        const get = this.coordinates
            ? this.ngxHelperCoordinatesService.get(this.coordinates, { view: this.input.center, zoom: this.input.zoom })
            : this.ngxHelperCoordinatesService.get({ view: this.input.center, zoom: this.input.zoom });

        get.then(
            (coordinates: INgxHelperCoordinates) => {
                this.coordinates = coordinates;
                this.formControl.setValue(coordinates);
                this.formControl.markAsTouched();
            },
            () => this.formControl.markAsTouched(),
        );
    }
}
