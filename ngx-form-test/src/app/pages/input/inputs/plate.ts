import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const PlateInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'plate',
                        type: 'PLATE',
                        value: { regional: '12', letter: 'ع', serial: '345', iran: '67' },
                        appearance: 'fill',
                    },
                    { name: 'plate-optional', type: 'PLATE', title: 'اختیاری', optional: true },
                    { name: 'plate-autoFocus', type: 'PLATE', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            { rows: [{ name: 'plate-letter', type: 'PLATE', title: 'حرف پیش‌فرض', defaultLetter: 'ع', optional: true }] },
            {
                rows: [
                    {
                        name: 'plate-disableOn',
                        type: 'PLATE',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['plate-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'plate-hideOn',
                        type: 'PLATE',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['plate-optional'],
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
