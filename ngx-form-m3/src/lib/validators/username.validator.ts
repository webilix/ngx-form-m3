import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const UsernameValidator = (verify?: {
    minLength?: number;
    useDash?: boolean;
    useDot?: boolean;
    startWithChar?: boolean;
    endWithChar?: boolean;
}): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.string(value)) return null;

        // MINLENGTH
        const minLength: number | undefined = verify?.minLength;

        if (minLength && minLength > 0 && value.length < minLength)
            return { username: `مقدار باید حداقل داری ${Helper.NUMBER.format(minLength)} کاراکتر باشد.` };

        // USERNAME
        const regExp: RegExp = new RegExp(/^[a-z0-9-.]{1,}$/);
        if (!regExp.test(value)) {
            const chars: string[] = [
                'حروف انگلیسی کوچک',
                'اعداد انگلیسی',
                !!verify?.useDash ? 'خط فاصله' : '',
                !!verify?.useDot ? 'نقطه' : '',
            ].filter((char: string) => char !== '');
            return { username: `کاراکترهای مجاز: ${chars.join('، ')}` };
        }

        // USE DASH
        if (!verify?.useDash && value.indexOf('-') !== -1)
            return { username: `امکان استفاده از خط فاصله در کلمه عبور وجود ندارد.` };

        // USE DOT
        if (!verify?.useDot && value.indexOf('.') !== -1)
            return { username: `امکان استفاده از نقطه در کلمه عبور وجود ندارد.` };

        // START WITH CHAR
        if (!!verify?.startWithChar) {
            const regExp: RegExp = new RegExp(/^[a-z]{1}/);
            if (!regExp.test(value)) return { username: 'مقدار باید با یک کاراکتر انگلیسی شروع شده باشد.' };
        }

        // END WITH CHAR
        if (!!verify?.endWithChar) {
            const regExp: RegExp = new RegExp(/[a-z]{1}$/);
            if (!regExp.test(value)) return { username: 'مقدار باید با یک کاراکتر انگلیسی تمام شده باشد.' };
        }

        return null;
    };
};
