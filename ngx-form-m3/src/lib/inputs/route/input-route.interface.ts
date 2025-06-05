import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { InputMethods, IInput } from '../input.interface';

export interface IRouteCoordinates {
    latitude: number;
    longitude: number;
}

export type Route = IRouteCoordinates[];

export interface IInputRoute extends Omit<IInput, 'value' | 'english' | 'autoFocus'> {
    readonly type: 'ROUTE';
    readonly value?: Route | null;
    readonly center?: IRouteCoordinates;
    readonly zoom?: number;
}

export class InputRouteMethods extends InputMethods<IInputRoute, Route | null> {
    override control(input: IInputRoute, validators: ValidatorFn[]): FormControl<Route | null> {
        const value: Route =
            input.value && Helper.IS.array(input.value)
                ? input.value.filter(
                      (coordinates: IRouteCoordinates) =>
                          Helper.IS.object(coordinates) &&
                          Helper.IS.number(coordinates.latitude) &&
                          Helper.IS.number(coordinates.longitude),
                  )
                : [];
        return new FormControl<Route | null>(value.length > 1 ? value : [], validators);
    }

    override value(value: any, input: IInputRoute): Route | null {
        return Helper.IS.array(value) && value.length > 0 ? value : null;
    }
}
