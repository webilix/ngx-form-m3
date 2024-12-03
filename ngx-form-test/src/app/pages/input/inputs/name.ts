import { NgxFormInputs } from '@webilix/ngx-form-m3';

export const NameInputs: NgxFormInputs[] = [
    { name: 'name', type: 'NAME', value: { first: 'نام', last: 'نام خانوادگی' }, appearance: 'fill' },
    { name: 'name-optional', type: 'NAME', title: 'اختیاری', optional: true },
    { name: 'name-autoFocus', type: 'NAME', title: 'فوکوس', optional: true, autoFocus: true },
    {
        name: 'name-disableOn',
        type: 'NAME',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values) => !!values['name-optional'],
    },
    {
        name: 'name-hideOn',
        type: 'NAME',
        title: 'پنهان شدن',
        optional: true,
        hideOn: (values) => !!values['name-optional'],
    },
];
