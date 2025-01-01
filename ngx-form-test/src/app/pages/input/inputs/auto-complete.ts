import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

const faOptions: string[] = [...Array(5)].map((_, index: number) => `گزینه ${index + 1}`);

const enOptions: string[] = [...Array(5)].map((_, index: number) => `Option ${index + 1}`);

export const AutoCompleteInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'auto-complete',
                        type: 'AUTO-COMPLETE',
                        title: 'لیست تکمیلی',
                        value: 'گزینه 2',
                        options: faOptions,
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'auto-complete-optional',
                        type: 'AUTO-COMPLETE',
                        title: 'اختیاری',
                        options: faOptions,
                        optional: true,
                    },
                    {
                        name: 'auto-complete-english',
                        type: 'AUTO-COMPLETE',
                        title: 'انگلیسی',
                        options: enOptions,
                        optional: true,
                        english: true,
                    },
                ],
            },
            {
                rows: [],
            },
            {
                rows: [
                    {
                        name: 'auto-complete-disableOn',
                        type: 'AUTO-COMPLETE',
                        title: 'غیرفعال شدن',
                        options: faOptions,
                        optional: true,
                        disableOn: (values) => !!values['auto-complete-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'auto-complete-hideOn',
                        type: 'AUTO-COMPLETE',
                        title: 'پنهان شدن',
                        options: faOptions,
                        optional: true,
                        hideOn: (values) => !!values['auto-complete-optional'],
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
