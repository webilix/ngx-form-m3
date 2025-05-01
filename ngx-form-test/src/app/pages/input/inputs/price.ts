import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const PriceInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'price',
                        type: 'PRICE',
                        value: 123456789,
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'price-optional', type: 'PRICE', title: 'اختیاری', optional: true },
                    { name: 'price-autoFocus', type: 'PRICE', title: 'فوکوس', optional: true, autoFocus: true },
                    {
                        name: 'price-currency',
                        type: 'PRICE',
                        title: 'واحد پولی',
                        currency: 'تومان',
                        optional: true,
                        hideText: true,
                    },
                    { name: 'price-hide-text', type: 'PRICE', title: 'عدم نمایش به حروف', optional: true, hideText: true },
                ],
            },
            {
                rows: [
                    { name: 'price-fraction', type: 'PRICE', title: 'اعداد اعشاری', optional: true, fractionDigits: true },
                    {
                        name: 'price-fraction-5',
                        type: 'PRICE',
                        title: 'اعداد اعشاری (۵ رقم)',
                        optional: true,
                        fractionDigits: 5,
                    },
                    { name: 'price-minimum', type: 'PRICE', title: 'حداقل مقدار', optional: true, minimum: 10_000 },
                    { name: 'price-maximum', type: 'PRICE', title: 'حداکثر مقدار', optional: true, maximum: 10_000 },
                    { name: 'price-multiply-of', type: 'PRICE', title: 'مضارب ۱۰', optional: true, multiplyOf: 10 },
                ],
            },
            {
                rows: [
                    {
                        name: 'price-disableOn',
                        type: 'PRICE',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['price-optional'],
                        currency: 'تومان',
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'price-hideOn',
                        type: 'PRICE',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['price-optional'],
                        currency: 'تومان',
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
