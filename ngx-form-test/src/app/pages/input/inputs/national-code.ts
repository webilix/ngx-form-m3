import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const NationalCodeInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'national-code',
                        type: 'NATIONAL-CODE',
                        value: '0123456789',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'national-code-optional', type: 'NATIONAL-CODE', title: 'اختیاری', optional: true },
                    {
                        name: 'national-code-autoFocus',
                        type: 'NATIONAL-CODE',
                        title: 'فوکوس',
                        optional: true,
                        autoFocus: true,
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'national-code-icon-fill',
                        type: 'NATIONAL-CODE',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'fill',
                    },
                    {
                        name: 'national-code-icon-outline',
                        type: 'NATIONAL-CODE',
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
                        name: 'national-code-disableOn',
                        type: 'NATIONAL-CODE',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['national-code-optional'],
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
                        name: 'national-code-hideOn',
                        type: 'NATIONAL-CODE',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['national-code-optional'],
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
