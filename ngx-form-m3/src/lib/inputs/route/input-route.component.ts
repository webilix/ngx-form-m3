import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Helper, IGeoRouteLength } from '@webilix/helper-library';
import { NgxHelperNumberPipe, NgxHelperRoute, NgxHelperRouteService } from '@webilix/ngx-helper-m3';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { NgxFormRoute } from '../../ngx-form.inputs';
import { INgxFormValues } from '../../ngx-form.interface';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputRoute } from './input-route.interface';

@Component({
    host: { selector: 'input-route' },
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        NgxHelperNumberPipe,
        InputErrorPipe,
        MultiLinePipe,
    ],
    templateUrl: './input-route.component.html',
    styleUrl: './input-route.component.scss',
})
export class InputRouteComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputRoute = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    public route: NgxFormRoute = this.formControl.value || [];
    public distance: IGeoRouteLength = Helper.GEO.routeLength(this.route);

    constructor(private readonly ngxHelperRouteService: NgxHelperRouteService) {}

    setRoute(): void {
        if (this.formControl.disabled) return;

        const get =
            this.route.length > 0
                ? this.ngxHelperRouteService.get(this.route, { view: this.input.center, zoom: this.input.zoom })
                : this.ngxHelperRouteService.get({ view: this.input.center, zoom: this.input.zoom });
        get.then(
            (route: NgxHelperRoute) => {
                this.route = route;
                this.formControl.setValue(route);
                this.formControl.markAsTouched();
                this.distance = Helper.GEO.routeLength(this.route);
            },
            () => this.formControl.markAsTouched(),
        );
    }

    resetRoute(): void {
        if (this.formControl.disabled) return;

        this.route = [];
        this.formControl.setValue(null);
        this.formControl.markAsTouched();
    }
}
