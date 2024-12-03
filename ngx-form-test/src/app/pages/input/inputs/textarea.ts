import { NgxFormInputs } from '@webilix/ngx-form-m3';

export const TextareaInputs: NgxFormInputs[] = [
    {
        name: 'textarea',
        type: 'TEXTAREA',
        title: 'متن چند خطی',
        value: 'متن چند خطی',
        appearance: 'fill',
        hint: 'راهنما: مقدار الزامی است.',
    },
    { name: 'textarea-optional', type: 'TEXTAREA', title: 'اختیاری', optional: true },
    { name: 'textarea-autoFocus', type: 'TEXTAREA', title: 'فوکوس', optional: true, autoFocus: true },
    { name: 'textarea-english', type: 'TEXTAREA', title: 'انگلیسی', optional: true, english: true },
    { name: 'textarea-height', type: 'TEXTAREA', title: 'ارتفاع ثابت', optional: true, height: 35 },
    { name: 'textarea-height', type: 'TEXTAREA', title: 'ارتفاع متغیر', optional: true, autoHeight: true, maxHeight: 200 },
    { name: 'textarea-maxLength', type: 'TEXTAREA', title: 'حداکثر طول متن', optional: true, maxLength: 25 },
    { name: 'textarea-counter', type: 'TEXTAREA', title: 'شمارنده', optional: true, counter: true },
    {
        name: 'textarea-disableOn',
        type: 'TEXTAREA',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values) => !!values['textarea-optional'],
    },
    {
        name: 'textarea-hideOn',
        type: 'TEXTAREA',
        title: 'پنهان شدن',
        optional: true,
        hideOn: (values) => !!values['textarea-optional'],
    },
];
