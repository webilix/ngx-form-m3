import { NgxFormInputs } from '@webilix/ngx-form-m3';

export const TextInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'text',
                        type: 'TEXT',
                        title: 'متن یک خطی',
                        value: 'متن یک خطی',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                    },
                    { name: 'text-optional', type: 'TEXT', title: 'اختیاری', optional: true },
                    { name: 'text-autoFocus', type: 'TEXT', title: 'فوکوس', optional: true, autoFocus: true },
                    { name: 'text-english', type: 'TEXT', title: 'انگلیسی', optional: true, english: true },
                ],
            },
            {
                rows: [
                    { name: 'text-length', type: 'TEXT', title: 'طول متن', optional: true, minLength: 5, maxLength: 5 },
                    { name: 'text-minLength', type: 'TEXT', title: 'حداقل طول متن', optional: true, minLength: 5 },
                    { name: 'text-maxLength', type: 'TEXT', title: 'حداکثر طول متن', optional: true, maxLength: 5 },
                ],
            },
            {
                rows: [
                    {
                        name: 'text-disableOn',
                        type: 'TEXT',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['text-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                    },
                    {
                        name: 'text-hideOn',
                        type: 'TEXT',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['text-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه پنهان می‌شود.',
                    },
                ],
            },
        ],
    },
];
