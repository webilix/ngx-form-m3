import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const IpInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'ip',
                        type: 'IP',
                        value: '127.0.0.1',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'ip-optional', type: 'IP', title: 'اختیاری', optional: true },
                    { name: 'ip-autoFocus', type: 'IP', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'ip-icon-fill',
                        type: 'IP',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'fill',
                    },
                    {
                        name: 'ip-icon-outline',
                        type: 'IP',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'outline',
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'ip-disableOn',
                        type: 'IP',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['ip-optional'],
                        showIcon: true,
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'ip-hideOn',
                        type: 'IP',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['ip-optional'],
                        showIcon: true,
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
