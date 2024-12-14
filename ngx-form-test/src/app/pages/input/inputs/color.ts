import { NgxFormInputs } from '@webilix/ngx-form-m3';

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
                    },
                    { name: 'color-optional', type: 'COLOR', title: 'اختیاری', optional: true },
                ],
            },
            {
                rows: [],
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
                    },
                    {
                        name: 'color-hideOn',
                        type: 'COLOR',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['color-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه پنهان می‌شود.',
                    },
                ],
            },
        ],
    },
];
