import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const DayInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'day',
                        type: 'DAY',
                        value: '03-13',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'day-optional', type: 'DAY', title: 'اختیاری', optional: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'day-disableOn',
                        type: 'DAY',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['day-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'day-hideOn',
                        type: 'DAY',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['day-optional'],
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
