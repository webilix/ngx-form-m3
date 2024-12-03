import { NgxFormInputs } from '@webilix/ngx-form-m3';

export const EmailInputs: NgxFormInputs[] = [
    { name: 'email', type: 'EMAIL', value: 'email@domain.com', appearance: 'fill', hint: 'راهنما: مقدار الزامی است.' },
    { name: 'email-optional', type: 'EMAIL', title: 'اختیاری', optional: true },
    { name: 'email-autoFocus', type: 'EMAIL', title: 'فوکوس', optional: true, autoFocus: true },
    {
        name: 'email-disableOn',
        type: 'EMAIL',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values) => !!values['email-optional'],
    },
    {
        name: 'email-hideOn',
        type: 'EMAIL',
        title: 'پنهان شدن',
        optional: true,
        hideOn: (values) => !!values['email-optional'],
    },
];
