import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const FileInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'file',
                        type: 'FILE',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'file-optional', type: 'FILE', title: 'اختیاری', optional: true },
                ],
            },
            {
                rows: [
                    { name: 'file-image', type: 'FILE', title: 'تصویر', optional: true, mimes: 'IMAGE' },
                    { name: 'file-pdf', type: 'FILE', title: 'پی‌دی‌اف', optional: true, mimes: ['application/pdf'] },
                ],
            },
            {
                rows: [
                    {
                        name: 'file-disableOn',
                        type: 'FILE',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['file-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'file-hideOn',
                        type: 'FILE',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['file-optional'],
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
