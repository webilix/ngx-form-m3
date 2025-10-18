import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const TimeInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'time',
                        type: 'TIME',
                        value: '12:34:56',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'time-optional', type: 'TIME', title: 'اختیاری', optional: true },
                ],
            },
            {
                rows: [{ name: 'time-showSeconds', type: 'TIME', title: 'نمایش ثانیه', optional: true, showSeconds: true }],
            },
            {
                rows: [
                    {
                        name: 'time-disableOn',
                        type: 'TIME',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['time-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'time-hideOn',
                        type: 'TIME',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['time-optional'],
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
