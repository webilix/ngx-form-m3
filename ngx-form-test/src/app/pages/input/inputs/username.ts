import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const UsernameInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'username',
                        type: 'USERNAME',
                        value: 'username',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'username-optional', type: 'USERNAME', title: 'اختیاری', optional: true },
                    { name: 'username-autoFocus', type: 'USERNAME', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'username-minLength',
                        type: 'USERNAME',
                        title: 'حداقل طول',
                        optional: true,
                        verify: { minLength: 5 },
                    },
                    {
                        name: 'username-useDot',
                        type: 'USERNAME',
                        title: 'استفاده از نقطه',
                        optional: true,
                        verify: { useDot: true },
                    },
                    {
                        name: 'username-useDash',
                        type: 'USERNAME',
                        title: 'استفاده از خط فاصله',
                        optional: true,
                        verify: { useDash: true },
                    },
                    {
                        name: 'username-startWithChar',
                        type: 'USERNAME',
                        title: 'شروع با حرف',
                        optional: true,
                        verify: { startWithChar: true },
                    },
                    {
                        name: 'username-endWithChar',
                        type: 'USERNAME',
                        title: 'پایان با حرف',
                        optional: true,
                        verify: { endWithChar: true },
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'username-disableOn',
                        type: 'USERNAME',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['username-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'username-hideOn',
                        type: 'USERNAME',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['username-optional'],
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
