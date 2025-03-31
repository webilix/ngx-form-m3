import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface ICoordinates {
    latitude: number;
    longitude: number;
}

export interface IInputCoordinates extends Omit<IInput, 'value' | 'english' | 'autoFocus'> {
    readonly type: 'COORDINATES';
    readonly value?: ICoordinates | null;
    readonly center?: ICoordinates;
    readonly zoom?: number;
}

export class InputCoordinatesMethods extends InputMethods<IInputCoordinates, ICoordinates | null> {
    override control(input: IInputCoordinates, validators: ValidatorFn[]): FormControl<ICoordinates | null> {
        const value: ICoordinates | null =
            input.value &&
            Helper.IS.object(input.value) &&
            Helper.IS.number(input.value.latitude) &&
            Helper.IS.number(input.value.longitude)
                ? input.value
                : null;
        return new FormControl<ICoordinates | null>(value, validators);
    }

    override value(value: any, input: IInputCoordinates): ICoordinates | null {
        return Helper.IS.object(value) ? value : null;
    }
}
