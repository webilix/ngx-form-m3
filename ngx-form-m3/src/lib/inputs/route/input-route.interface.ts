import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { INgxFormCoordinates, NgxFormRoute } from '../../ngx-form.inputs';

import { InputMethods, IInput } from '../input.interface';

export interface IInputRoute extends Omit<IInput, 'value' | 'english' | 'autoFocus'> {
    readonly type: 'ROUTE';
    readonly value?: NgxFormRoute | null;
    readonly center?: INgxFormCoordinates;
    readonly zoom?: number;
}

export class InputRouteMethods extends InputMethods<IInputRoute, NgxFormRoute | null> {
    override control(input: IInputRoute, validators: ValidatorFn[]): FormControl<NgxFormRoute | null> {
        const value: NgxFormRoute =
            input.value && Helper.IS.array(input.value)
                ? input.value.filter(
                      (coordinates: INgxFormCoordinates) =>
                          Helper.IS.object(coordinates) &&
                          Helper.IS.number(coordinates.latitude) &&
                          Helper.IS.number(coordinates.longitude),
                  )
                : [];
        return new FormControl<NgxFormRoute | null>(value.length > 1 ? value : [], validators);
    }

    override value(value: any, input: IInputRoute): NgxFormRoute | null {
        return Helper.IS.array(value) && value.length > 0 ? value : null;
    }
}
