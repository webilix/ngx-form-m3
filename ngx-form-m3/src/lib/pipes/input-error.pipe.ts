import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

@Pipe({ name: 'InputErrorPipe' })
export class InputErrorPipe implements PipeTransform {
    transform(errors: ValidationErrors | null | undefined, type: string): string {
        if (errors === null || errors === undefined) return '';

        const keys: string[] = Object.keys(errors);
        if (keys.length === 0) return '';

        const error: string = keys[0];
        const value: any = errors[error];

        switch (error) {
            case 'required':
                return 'مقدار الزامی است.';

            case 'length':
                return `مقدار باید داری ${Helper.NUMBER.format(value)} کاراکتر باشد.`;

            case 'minlength':
                return `مقدار باید حداقل داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'maxlength':
                return `مقدار می‌تواند حداکثر داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'mindate':
                return `تاریخ باید برابر یا بعد از ${value} انتخاب شده باشد.`;

            case 'maxdate':
                return `تاریخ باید برابر یا قبل از ${value} انتخاب شده باشد.`;

            case 'pattern':
                switch (type) {
                    case 'EMAIL':
                        return 'فرمت استاندارد ایمیل رعایت نشده است.';
                    case 'PASSWORD':
                        switch (true) {
                            case value.requiredPattern.includes('[0-9]'):
                                return 'مقدار باید شامل اعداد انگلیسی باشد.';
                            case value.requiredPattern.includes('[a-z]'):
                                return 'مقدار باید شامل حروف انگلیسی کوچک باشد.';
                            case value.requiredPattern.includes('[A-Z]'):
                                return 'مقدار باید شامل حروف انگلیسی بزرگ باشد.';
                        }
                        return 'کاراکترهای الزامی در کلمه عبور استفاده نشده‌اند.';
                }
                break;

            case 'mask':
                switch (type) {
                    case 'MOBILE':
                        return 'شماره موبایل دارای ۱۱ رقم است.';
                }
                break;
        }

        return 'مقدار وارد شده صحیح نیست.';
    }
}
