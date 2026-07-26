import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const ColorInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'color',
                        type: 'COLOR',
                        value: '#FF6600',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'color-optional', type: 'COLOR', title: 'اختیاری', optional: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'color-palette',
                        type: 'COLOR',
                        title: 'دارای لیست',
                        palette: ['CC', '77', '33']
                            .map((r) => ['CC', '77', '33'].map((g) => ['CC', '77', '33'].map((b) => `#${r}${g}${b}`)))
                            .flat()
                            .flat(),
                        optional: true,
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'color-disableOn',
                        type: 'COLOR',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['color-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'color-hideOn',
                        type: 'COLOR',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['color-optional'],
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
