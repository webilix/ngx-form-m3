import { ValidatorFn, FormControl } from '@angular/forms';
import { ComponentType } from '@angular/cdk/portal';

import { InputMethods, IInput } from '../input.interface';

export interface IInputComponent extends Omit<IInput, 'value' | 'english' | 'autoFocus'> {
    readonly type: 'COMPONENT';
    readonly value?: any;
    readonly component: ComponentType<any>;
    readonly componentInputs?: { [key: string]: any };
}

export class InputComponentMethods extends InputMethods<IInputComponent, any> {
    override control(input: IInputComponent, validators: ValidatorFn[]): FormControl<any> {
        const value: any = input.value !== undefined ? input.value : null;
        return new FormControl<any>(value, validators);
    }

    override value(value: any, input: IInputComponent): any {
        return value !== undefined ? value : null;
    }
}
