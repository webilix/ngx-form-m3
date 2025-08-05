import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

const tags: string[] = [
    'تگ اول',
    'تگ دوم',
    'تگ سوم',
    'تگ چهارم',
    'تگ پنجم',
    'تگ ششم',
    'تگ هفتم',
    'تگ هشتم',
    'تگ نهم',
    'تگ دهم',
];

export const TagInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'tag',
                        type: 'TAG',
                        value: ['تگ سوم', 'تگ هفتم'],
                        tags,
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                        minCount: 1,
                    },
                    { name: 'tag-optional', type: 'TAG', title: 'اختیاری', tags },
                    { name: 'tag-autoFocus', type: 'TAG', title: 'فوکوس', tags, autoFocus: true },
                ],
            },
            {
                rows: [
                    { name: 'tag-min-count', type: 'TAG', title: 'حداقل انتخاب', tags, minCount: 2 },
                    { name: 'tag-max-count', type: 'TAG', title: 'حداکثر انتخاب', tags, maxCount: 2 },
                ],
            },
            {
                rows: [
                    {
                        name: 'tag-disableOn',
                        type: 'TAG',
                        title: 'غیرفعال شدن',
                        tags,
                        disableOn: (values) => !!values['tag-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'tag-hideOn',
                        type: 'TAG',
                        title: 'پنهان شدن',
                        tags,
                        hideOn: (values) => !!values['tag-optional'],
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
