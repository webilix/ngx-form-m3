import { ValidatorFn, FormControl } from '@angular/forms';
import { ComponentType } from '@angular/cdk/portal';

import { InputMethods } from '../input.interface';

export interface IInputComponent {
    readonly type: 'COMPONENT';
    readonly name: string;
    readonly component: ComponentType<any>;
    readonly data?: any;
}

export class InputComponentMethods extends InputMethods<IInputComponent, string | null> {
    override control(input: IInputComponent, validators: ValidatorFn[]): FormControl<string | null> {
        return new FormControl<string | null>(null, validators);
    }

    override value(value: any, input: IInputComponent): string | null {
        return value;
    }
}
