import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { INgxFormCoordinates } from '../../ngx-form.inputs';

import { InputMethods, IInput } from '../input.interface';

export interface IInputCoordinates extends Omit<IInput, 'value' | 'english' | 'autoFocus'> {
    readonly type: 'COORDINATES';
    readonly value?: INgxFormCoordinates | null;
    readonly center?: INgxFormCoordinates;
    readonly zoom?: number;
}

export class InputCoordinatesMethods extends InputMethods<IInputCoordinates, INgxFormCoordinates | null> {
    override control(input: IInputCoordinates, validators: ValidatorFn[]): FormControl<INgxFormCoordinates | null> {
        const value: INgxFormCoordinates | null =
            input.value &&
            Helper.IS.object(input.value) &&
            Helper.IS.number(input.value.latitude) &&
            Helper.IS.number(input.value.longitude)
                ? input.value
                : null;
        return new FormControl<INgxFormCoordinates | null>(value, validators);
    }

    override value(value: any, input: IInputCoordinates): INgxFormCoordinates | null {
        return Helper.IS.object(value) ? value : null;
    }
}
