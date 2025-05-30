import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

const faOptions: { id: string; title: string }[] = [...Array(5)].map((_, index: number) => ({
    id: `OPT${index + 1}`,
    title: `گزینه ${index + 1}`,
}));

const enOptions: { id: string; title: string }[] = [...Array(5)].map((_, index: number) => ({
    id: `OPT${index + 1}`,
    title: `Option ${index + 1}`,
}));

export const MultiSelectInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'multi-select',
                        type: 'MULTI-SELECT',
                        title: 'چند انتخابی',
                        value: ['OPT2'],
                        options: faOptions,
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
                    { name: 'multi-select-optional', type: 'MULTI-SELECT', title: 'اختیاری', options: faOptions },
                    {
                        name: 'multi-select-english',
                        type: 'MULTI-SELECT',
                        title: 'انگلیسی',
                        options: enOptions,
                        english: true,
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'multi-select-view-select',
                        type: 'MULTI-SELECT',
                        title: 'نمایش لیست کشویی',
                        options: faOptions,
                        view: 'SELECT',
                    },
                    {
                        name: 'multi-select-min-count',
                        type: 'MULTI-SELECT',
                        title: 'حداقل انتخاب',
                        options: faOptions,
                        minCount: 2,
                        selectButtons: true,
                    },
                    {
                        name: 'multi-select-max-count',
                        type: 'MULTI-SELECT',
                        title: 'حداکثر انتخاب',
                        options: faOptions,
                        maxCount: 2,
                        groups: [
                            { title: 'فرد', ids: ['OPT1', 'OPT3', 'OPT5'] },
                            { title: 'زوج', ids: ['OPT2', 'OPT4'] },
                        ],
                    },
                    {
                        name: 'multi-select-list-height',
                        type: 'MULTI-SELECT',
                        title: 'ارتفاع لیست',
                        options: faOptions,
                        listMaxHeight: 120,
                        selectButtons: true,
                        groups: [
                            { title: 'فرد', ids: ['OPT1', 'OPT3', 'OPT5'] },
                            { title: 'زوج', ids: ['OPT2', 'OPT4'] },
                        ],
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'multi-select-disableOn',
                        type: 'MULTI-SELECT',
                        title: 'غیرفعال شدن',
                        options: faOptions,
                        disableOn: (values) => !!values['multi-select-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'multi-select-hideOn',
                        type: 'MULTI-SELECT',
                        title: 'پنهان شدن',
                        options: faOptions,
                        hideOn: (values) => !!values['multi-select-optional'],
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
