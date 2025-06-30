import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { DuplicateValidator, MaxCountValidator, MinCountValidator } from '../../validators';
import { INgxFormOptionList } from '../../ngx-form.inputs';

import { InputMethods, IInput } from '../input.interface';

export interface IInputOptionList extends Omit<IInput, 'value' | 'optional'> {
    readonly type: 'OPTION-LIST';
    readonly title: string;
    readonly value?: INgxFormOptionList[];
    readonly minCount?: number;
    readonly maxCount?: number;
    readonly disableSort?: boolean;
    readonly allowDuplicates?: boolean;
    readonly placeholder?: string;
}

export class InputOptionListMethods extends InputMethods<IInputOptionList, INgxFormOptionList[] | null> {
    override control(input: IInputOptionList, validators: ValidatorFn[]): FormControl<INgxFormOptionList[] | null> {
        if (!input.allowDuplicates) validators.push(DuplicateValidator<IInputOptionList>((value) => value.title));
        if (input.minCount) validators.push(MinCountValidator(input.minCount));
        if (input.maxCount) validators.push(MaxCountValidator(input.maxCount));

        const value: INgxFormOptionList[] = (Array.isArray(input.value) ? input.value : []).filter(
            (value: INgxFormOptionList) => {
                if (!Helper.IS.object(value)) return false;
                if (value.id !== null && (!Helper.IS.string(value.id) || value.id.length === 0)) return false;
                if (!Helper.IS.string(value.title) || value.title.length === 0) return false;
                return true;
            },
        );
        return new FormControl<INgxFormOptionList[] | null>(value, validators);
    }

    override value(value: any, input: IInputOptionList): INgxFormOptionList[] | null {
        return Array.isArray(value) && value.length > 0 ? value : null;
    }
}
