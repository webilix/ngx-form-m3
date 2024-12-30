import { NgxFormInputs } from '@webilix/ngx-form-m3';

export const NumberInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'number',
                        type: 'NUMBER',
                        title: 'مقدار عددی',
                        value: 123456789,
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        showText: true,
                    },
                    { name: 'number-optional', type: 'NUMBER', title: 'اختیاری', optional: true },
                    { name: 'number-autoFocus', type: 'NUMBER', title: 'فوکوس', optional: true, autoFocus: true },
                    {
                        name: 'number-icon-fill',
                        type: 'NUMBER',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'fill',
                    },
                    {
                        name: 'number-icon-outline',
                        type: 'NUMBER',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'outline',
                    },
                    {
                        name: 'number-icon-text',
                        type: 'NUMBER',
                        title: 'نمایش به حروف',
                        optional: true,
                        showText: true,
                        allowNegatives: true,
                        fractionDigits: 5,
                    },
                ],
            },
            {
                rows: [
                    { name: 'number-fraction', type: 'NUMBER', title: 'اعداد اعشاری', optional: true, fractionDigits: true },
                    {
                        name: 'number-fraction-5',
                        type: 'NUMBER',
                        title: 'اعداد اعشاری (۵ رقم)',
                        optional: true,
                        fractionDigits: 5,
                    },
                    { name: 'number-negative', type: 'NUMBER', title: 'اعداد منفی', optional: true, allowNegatives: true },
                    { name: 'number-minimum', type: 'NUMBER', title: 'حداقل مقدار', optional: true, minimum: 10_000 },
                    { name: 'number-maximum', type: 'NUMBER', title: 'حداکثر مقدار', optional: true, maximum: 10_000 },
                    { name: 'number-multiply-of', type: 'NUMBER', title: 'مضارب ۱۰', optional: true, multiplyOf: 10 },
                ],
            },
            {
                rows: [
                    {
                        name: 'number-disableOn',
                        type: 'NUMBER',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['number-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                    },
                    {
                        name: 'number-hideOn',
                        type: 'NUMBER',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['number-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه پنهان می‌شود.',
                    },
                ],
            },
        ],
    },
];
