import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Helper } from '@webilix/helper-library';

export const IdValidator = (verify?: {
    readonly minLength?: number;
    readonly maxLength?: number;
    readonly useDash?: boolean;
    readonly useDot?: boolean;
    readonly canStartWithNumber?: boolean;
    readonly canEndWithNumber?: boolean;
}): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.string(value)) return null;

        // MINLENGTH
        const minLength: number | undefined = verify?.minLength;
        if (minLength && minLength > 0 && value.length < minLength)
            return { id: `مقدار باید حداقل داری ${Helper.NUMBER.format(minLength)} کاراکتر باشد.` };

        // MAXLENGTH
        const maxLength: number | undefined = verify?.maxLength;
        if (maxLength && maxLength > 0 && value.length > maxLength)
            return { id: `مقدار می‌تواند حداکثر داری ${Helper.NUMBER.format(maxLength)} کاراکتر باشد.` };

        // ID
        const regExp: RegExp = new RegExp(/^[a-z0-9-.]{1,}$/);
        if (!regExp.test(value)) {
            const chars: string[] = [].filter((char: string) => char !== '');
            return { id: 'کاراکترهای مجاز: حروف انگلیسی کوچک  و اعداد انگلیسی' };
        }

        // USE DASH
        if (!verify?.useDash && value.indexOf('-') !== -1) return { id: `امکان استفاده از خط فاصله در مقدار وجود ندارد.` };

        // USE DOT
        if (!verify?.useDot && value.indexOf('.') !== -1) return { id: `امکان استفاده از نقطه در مقدار وجود ندارد.` };

        // START WITH CHAR
        if (!verify?.canStartWithNumber) {
            const regExp: RegExp = new RegExp(/^[a-z]{1}/);
            if (!regExp.test(value)) return { id: 'مقدار باید با یک کاراکتر انگلیسی شروع شده باشد.' };
        }

        // END WITH CHAR
        if (!verify?.canEndWithNumber) {
            const regExp: RegExp = new RegExp(/[a-z]{1}$/);
            if (!regExp.test(value)) return { id: 'مقدار باید با یک کاراکتر انگلیسی تمام شده باشد.' };
        }

        return null;
    };
};
