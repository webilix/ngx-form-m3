import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const PasswordInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'password',
                        type: 'PASSWORD',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'password-optional', type: 'PASSWORD', title: 'اختیاری', optional: true },
                    { name: 'password-autoFocus', type: 'PASSWORD', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'password-forceLowerCase',
                        type: 'PASSWORD',
                        title: 'حروف کوچک',
                        optional: true,
                        verify: { minLength: 1, forceLowerCase: true },
                    },
                    {
                        name: 'password-forceUpperCase',
                        type: 'PASSWORD',
                        title: 'حروف بزرگ',
                        optional: true,
                        verify: { minLength: 1, forceUpperCase: true },
                    },
                    {
                        name: 'password-forceNumber',
                        type: 'PASSWORD',
                        title: 'اعداد',
                        optional: true,
                        verify: { minLength: 1, forceNumber: true },
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'password-disableOn',
                        type: 'PASSWORD',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['password-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'password-hideOn',
                        type: 'PASSWORD',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['password-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه پنهان می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                ],
            },
        ],
    },
];
