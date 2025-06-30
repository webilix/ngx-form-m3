import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const ItemListInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'item-list',
                        type: 'ITEM-LIST',
                        title: 'لیست گزینه‌ها',
                        value: ['گزینه اول', 'گزینه دوم', 'گزینه سوم'],
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
                    { name: 'item-list-optional', type: 'ITEM-LIST', title: 'اختیاری' },
                    { name: 'item-list-autoFocus', type: 'ITEM-LIST', title: 'فوکوس', autoFocus: true },
                    {
                        name: 'item-list-english',
                        type: 'ITEM-LIST',
                        title: 'انگلیسی',
                        english: true,
                    },
                ],
            },
            {
                rows: [
                    { name: 'item-list-min-count', type: 'ITEM-LIST', title: 'حداقل انتخاب', minCount: 2 },
                    { name: 'item-list-max-count', type: 'ITEM-LIST', title: 'حداکثر انتخاب', maxCount: 2 },
                    {
                        name: 'item-list-disable-sort',
                        type: 'ITEM-LIST',
                        title: 'عدم امکان مرتب کردن',
                        disableSort: true,
                    },
                    {
                        name: 'item-list-allow-duplicates',
                        type: 'ITEM-LIST',
                        title: 'مقادیر تکراری',
                        allowDuplicates: true,
                    },
                    {
                        name: 'item-list-placeholder',
                        type: 'ITEM-LIST',
                        title: 'مشخص کردن placeholder',
                        placeholder: 'مقدار مورد نظر را وارد کنید',
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'item-list-disableOn',
                        type: 'ITEM-LIST',
                        title: 'غیرفعال شدن',
                        disableOn: (values) => !!values['item-list-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'item-list-hideOn',
                        type: 'ITEM-LIST',
                        title: 'پنهان شدن',
                        hideOn: (values) => !!values['item-list-optional'],
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
