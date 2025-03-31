import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const MobileInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'mobile',
                        type: 'MOBILE',
                        value: '09123456789',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'mobile-optional', type: 'MOBILE', title: 'اختیاری', optional: true },
                    { name: 'mobile-autoFocus', type: 'MOBILE', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'mobile-icon-fill',
                        type: 'MOBILE',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'fill',
                    },
                    {
                        name: 'mobile-icon-outline',
                        type: 'MOBILE',
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
                        name: 'mobile-disableOn',
                        type: 'MOBILE',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['mobile-optional'],
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
                        name: 'mobile-hideOn',
                        type: 'MOBILE',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['mobile-optional'],
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
