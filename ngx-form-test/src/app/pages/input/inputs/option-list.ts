import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const OptionListInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'option-list',
                        type: 'OPTION-LIST',
                        title: 'لیست گزینه‌ها',
                        value: [
                            { id: 'item-1', title: 'گزینه اول' },
                            { id: null, title: 'گزینه دوم' },
                            { id: 'item-3', title: 'گزینه سوم' },
                        ],
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
                    { name: 'option-list-optional', type: 'OPTION-LIST', title: 'اختیاری' },
                    { name: 'option-list-autoFocus', type: 'OPTION-LIST', title: 'فوکوس', autoFocus: true },
                    {
                        name: 'option-list-english',
                        type: 'OPTION-LIST',
                        title: 'انگلیسی',
                        english: true,
                    },
                ],
            },
            {
                rows: [
                    { name: 'option-list-min-count', type: 'OPTION-LIST', title: 'حداقل انتخاب', minCount: 2 },
                    { name: 'option-list-max-count', type: 'OPTION-LIST', title: 'حداکثر انتخاب', maxCount: 2 },
                    {
                        name: 'option-list-disable-sort',
                        type: 'OPTION-LIST',
                        title: 'عدم امکان مرتب کردن',
                        disableSort: true,
                    },
                    {
                        name: 'option-list-allow-duplicates',
                        type: 'OPTION-LIST',
                        title: 'مقادیر تکراری',
                        allowDuplicates: true,
                    },
                    {
                        name: 'option-list-placeholder',
                        type: 'OPTION-LIST',
                        title: 'مشخص کردن placeholder',
                        placeholder: 'مقدار مورد نظر را وارد کنید',
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'option-list-disableOn',
                        type: 'OPTION-LIST',
                        title: 'غیرفعال شدن',
                        disableOn: (values) => !!values['option-list-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'option-list-hideOn',
                        type: 'OPTION-LIST',
                        title: 'پنهان شدن',
                        hideOn: (values) => !!values['option-list-optional'],
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
