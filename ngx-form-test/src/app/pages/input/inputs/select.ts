import { Helper } from '@webilix/helper-library';
import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

const faOptions: { id: string; title: string }[] = [...Array(5)].map((_, index: number) => ({
    id: `OPT${index + 1}`,
    title: `گزینه ${index + 1}`,
}));

const enOptions: { id: string; title: string }[] = [...Array(5)].map((_, index: number) => ({
    id: `OPT${index + 1}`,
    title: `Option ${index + 1}`,
}));

export const SelectInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'select',
                        type: 'SELECT',
                        title: 'لیست کشویی',
                        value: 'OPT2',
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
                    { name: 'select-optional', type: 'SELECT', title: 'اختیاری', options: faOptions, optional: true },
                    {
                        name: 'select-autoFocus',
                        type: 'SELECT',
                        title: 'فوکوس',
                        options: faOptions,
                        optional: true,
                        autoFocus: true,
                    },
                    {
                        name: 'select-english',
                        type: 'SELECT',
                        title: 'انگلیسی',
                        options: enOptions,
                        optional: true,
                        english: true,
                    },
                ],
            },
            {
                rows: [
                    { name: 'select-1option-required', type: 'SELECT', title: 'یک انتخابی الزامی', options: [faOptions[0]] },
                    {
                        name: 'select-1option-optional',
                        type: 'SELECT',
                        title: 'یک انتخابی اختیاری',
                        options: [faOptions[0]],
                        optional: true,
                    },
                    {
                        name: 'select-search-fa',
                        type: 'SELECT',
                        title: 'لیست فارسی دارای جستجو',
                        optional: true,
                        options: [...Array(50)].map((_, index: number) => ({
                            id: `OPT${index + 1}`,
                            title: `گزینه ${Helper.NUMBER.getTitle(index + 1)}`,
                        })),
                    },
                    {
                        name: 'select-search-en',
                        type: 'SELECT',
                        title: 'لیست انگلیسی دارای جستجو',
                        english: true,
                        optional: true,
                        options: [...Array(50)].map((_, index: number) => ({
                            id: `OPT${index + 1}`,
                            title: `Option ${index + 1}`,
                        })),
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'select-disableOn',
                        type: 'SELECT',
                        title: 'غیرفعال شدن',
                        options: faOptions,
                        optional: true,
                        disableOn: (values) => !!values['select-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'select-hideOn',
                        type: 'SELECT',
                        title: 'پنهان شدن',
                        options: faOptions,
                        optional: true,
                        hideOn: (values) => !!values['select-optional'],
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
