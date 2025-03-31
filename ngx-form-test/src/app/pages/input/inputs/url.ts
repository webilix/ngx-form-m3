import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const UrlInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'url',
                        type: 'URL',
                        value: 'https://google.com/',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'url-optional', type: 'URL', title: 'اختیاری', optional: true },
                    { name: 'url-autoFocus', type: 'URL', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'url-icon-fill',
                        type: 'URL',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'fill',
                    },
                    {
                        name: 'url-icon-outline',
                        type: 'URL',
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
                        name: 'url-disableOn',
                        type: 'URL',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['url-optional'],
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
                        name: 'url-hideOn',
                        type: 'URL',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['url-optional'],
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
