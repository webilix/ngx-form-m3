import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const DateInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'date',
                        type: 'DATE',
                        value: new Date(),
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'date-optional', type: 'DATE', title: 'اختیاری', optional: true },
                ],
            },
            {
                rows: [
                    { name: 'date-minDate', type: 'DATE', title: 'حداقل مقدار', optional: true, minDate: 'NOW' },
                    { name: 'date-maxDate', type: 'DATE', title: 'حداکثر مقدار', optional: true, maxDate: 'NOW' },
                    { name: 'date-format', type: 'DATE', title: 'فرمت نمایش', optional: true, format: 'Y/m/d' },
                ],
            },
            {
                rows: [
                    {
                        name: 'date-disableOn',
                        type: 'DATE',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['date-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'date-hideOn',
                        type: 'DATE',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['date-optional'],
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
