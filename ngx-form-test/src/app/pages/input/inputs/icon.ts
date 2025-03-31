import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const IconInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'icon',
                        type: 'ICON',
                        value: 'done_all',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'icon-optional', type: 'ICON', title: 'اختیاری', optional: true },
                    { name: 'icon-autoFocus', type: 'ICON', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [],
            },
            {
                rows: [
                    {
                        name: 'icon-disableOn',
                        type: 'ICON',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['icon-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'icon-hideOn',
                        type: 'ICON',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['icon-optional'],
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
