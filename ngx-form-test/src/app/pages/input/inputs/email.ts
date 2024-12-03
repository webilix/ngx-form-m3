import { NgxFormInputs } from '@webilix/ngx-form-m3';

export const EmailInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'email',
                        type: 'EMAIL',
                        value: 'email@domain.com',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                    },
                    { name: 'email-optional', type: 'EMAIL', title: 'اختیاری', optional: true },
                    { name: 'email-autoFocus', type: 'EMAIL', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'email-icon-fill',
                        type: 'EMAIL',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'fill',
                    },
                    {
                        name: 'email-icon-outline',
                        type: 'EMAIL',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'outline',
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'email-disableOn',
                        type: 'EMAIL',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['email-optional'],
                        showIcon: true,
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                    },
                    {
                        name: 'email-hideOn',
                        type: 'EMAIL',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['email-optional'],
                        showIcon: true,
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه پنهان می‌شود.',
                    },
                ],
            },
        ],
    },
];
