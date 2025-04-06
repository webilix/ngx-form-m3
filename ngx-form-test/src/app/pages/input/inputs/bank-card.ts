import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const BankCardInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'bank-card',
                        type: 'BANK-CARD',
                        value: '5022291000000008',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'bank-card-optional', type: 'BANK-CARD', title: 'اختیاری', optional: true },
                    { name: 'bank-card-autoFocus', type: 'BANK-CARD', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'bank-card-hide-bank',
                        type: 'BANK-CARD',
                        title: 'عدم نمایش بانک',
                        optional: true,
                        hideBank: true,
                        appearance: 'fill',
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'bank-card-disableOn',
                        type: 'BANK-CARD',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['bank-card-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'bank-card-hideOn',
                        type: 'BANK-CARD',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['bank-card-optional'],
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
