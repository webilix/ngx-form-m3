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
            case 'component':
                return value;

            case 'required':
                return 'مقدار الزامی است.';

            case 'length':
                return `مقدار باید داری ${Helper.NUMBER.format(value)} کاراکتر باشد.`;

            case 'minimum':
                return `مقدار نمی‌تواند کوچکتر از ${Helper.NUMBER.format(value)} باشد.`;

            case 'maximum':
                return `مقدار نمی‌تواند بزرگتر از ${Helper.NUMBER.format(value)} باشد.`;

            case 'multiplyOf':
                return `مقدار باید مضربی از ${Helper.NUMBER.format(value)} باشد.`;

            case 'minlength':
                return `مقدار باید حداقل داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'maxlength':
                return `مقدار می‌تواند حداکثر داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'mindate':
                return `تاریخ باید برابر یا بعد از ${value} انتخاب شده باشد.`;

            case 'maxdate':
                return `تاریخ باید برابر یا قبل از ${value} انتخاب شده باشد.`;

            case 'minmoment':
                return `زمان باید برابر یا بعد از ${value} انتخاب شده باشد.`;

            case 'maxmoment':
                return `زمان باید برابر یا قبل از ${value} انتخاب شده باشد.`;

            case 'mincount':
                return `انتخاب حداقل ${Helper.NUMBER.format(value)} گزینه الزامی است.`;

            case 'maxcount':
                return `امکان انتخاب بیشتر از ${Helper.NUMBER.format(value)} گزینه وجود ندارد.`;

            case 'duplicate':
                return 'امکان انتخاب مقادیر تکراری وجود ندارد.';

            case 'bank-card':
                return `شماره کارت بانکی صحیح مشخص نشده است.`;

            case 'bank-sheba':
                return `شماره شبا صحیح مشخص نشده است.`;

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
                    case 'URL':
                        return 'فرمت استاندارد آدرس سایت رعایت نشده است.';
                }
                break;

            case 'mask':
                switch (type) {
                    case 'BANK-CARD':
                        return 'شماره کارت بانکی دارای ۱۶ رقم است.';
                    case 'BANK-SHEBA':
                        return 'شماره شبا دارای ۲۴ رقم است.';
                    case 'MOBILE':
                        return 'شماره موبایل دارای ۱۱ رقم است.';
                }
                break;
        }

        return 'مقدار وارد شده صحیح نیست.';
    }
}
