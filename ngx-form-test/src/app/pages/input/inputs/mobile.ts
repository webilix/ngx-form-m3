import { NgxFormInputs } from '@webilix/ngx-form-m3';

export const MobileInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'mobile',
                        type: 'MOBILE',
                        value: '09123456789',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                    },
                    { name: 'mobile-optional', type: 'MOBILE', title: 'اختیاری', optional: true },
                    { name: 'mobile-autoFocus', type: 'MOBILE', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'mobile-disableOn',
                        type: 'MOBILE',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['mobile-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                    },
                    {
                        name: 'mobile-hideOn',
                        type: 'MOBILE',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['mobile-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه پنهان می‌شود.',
                    },
                ],
            },
        ],
    },
];
