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
                    },
                    {
                        name: 'multi-select-optional',
                        type: 'MULTI-SELECT',
                        title: 'اختیاری',
                        options: faOptions,
                        optional: true,
                    },
                    {
                        name: 'multi-select-english',
                        type: 'MULTI-SELECT',
                        title: 'انگلیسی',
                        options: enOptions,
                        optional: true,
                        english: true,
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'multi-select-min-count',
                        type: 'MULTI-SELECT',
                        title: 'حداقل انتخاب',
                        options: faOptions,
                        minCount: 2,
                    },
                    {
                        name: 'multi-select-max-count',
                        type: 'MULTI-SELECT',
                        title: 'حداکثر انتخاب',
                        options: faOptions,
                        maxCount: 2,
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
                        optional: true,
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
                        optional: true,
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
