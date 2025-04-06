import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const BankShebaInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'bank-sheba',
                        type: 'BANK-SHEBA',
                        value: 'IR062960000000100324200001',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'bank-sheba-optional', type: 'BANK-SHEBA', title: 'اختیاری', optional: true },
                    { name: 'bank-sheba-autoFocus', type: 'BANK-SHEBA', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'bank-sheba-disableOn',
                        type: 'BANK-SHEBA',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['bank-sheba-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'bank-sheba-hideOn',
                        type: 'BANK-SHEBA',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['bank-sheba-optional'],
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
