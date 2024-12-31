import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const CheckboxInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'checkbox',
                        type: 'CHECKBOX',
                        value: true,
                        message: 'تایید اطلاعات',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'checkbox-optional', type: 'CHECKBOX', message: 'اختیاری', optional: true },
                    { name: 'checkbox-english', type: 'CHECKBOX', message: 'انگلیسی', english: true },
                ],
            },
            {
                rows: [],
            },
            {
                rows: [
                    {
                        name: 'checkbox-disableOn',
                        type: 'CHECKBOX',
                        message: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['checkbox-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'checkbox-hideOn',
                        type: 'CHECKBOX',
                        message: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['checkbox-optional'],
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
