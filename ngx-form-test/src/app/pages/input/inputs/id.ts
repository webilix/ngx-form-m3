import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const IdInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'id',
                        type: 'ID',
                        value: 'id',
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'id-optional', type: 'ID', title: 'اختیاری', optional: true },
                    { name: 'id-autoFocus', type: 'ID', title: 'فوکوس', optional: true, autoFocus: true },
                ],
            },
            {
                rows: [
                    {
                        name: 'id-icon-fill',
                        type: 'ID',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'fill',
                    },
                    {
                        name: 'id-icon-outline',
                        type: 'ID',
                        title: 'نمایش آیکون',
                        optional: true,
                        showIcon: true,
                        appearance: 'outline',
                    },
                    { name: 'id-minLength', type: 'ID', title: 'حداقل طول', optional: true, verify: { minLength: 5 } },
                    { name: 'id-maxLength', type: 'ID', title: 'حداکثر طول', optional: true, verify: { maxLength: 5 } },
                    { name: 'id-useDot', type: 'ID', title: 'استفاده از نقطه', optional: true, verify: { useDot: true } },
                    {
                        name: 'id-useDash',
                        type: 'ID',
                        title: 'استفاده از خط فاصله',
                        optional: true,
                        verify: { useDash: true },
                    },
                    {
                        name: 'id-canStartWithNumber',
                        type: 'ID',
                        title: 'شروع با عدد',
                        optional: true,
                        verify: { canStartWithNumber: true },
                    },
                    {
                        name: 'id-canEndWithNumber',
                        type: 'ID',
                        title: 'پایان با عدد',
                        optional: true,
                        verify: { canEndWithNumber: true },
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'id-disableOn',
                        type: 'ID',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['ip-optional'],
                        showIcon: true,
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'id-hideOn',
                        type: 'ID',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['ip-optional'],
                        showIcon: true,
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
