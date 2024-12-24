import { NgxFormInputs } from '@webilix/ngx-form-m3';

export const MomentInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'moment',
                        type: 'MOMENT',
                        value: new Date(),
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                    },
                    { name: 'moment-optional', type: 'MOMENT', title: 'اختیاری', optional: true },
                ],
            },
            {
                rows: [
                    { name: 'moment-minDate', type: 'MOMENT', title: 'حداقل مقدار', optional: true, minDate: 'NOW' },
                    { name: 'moment-maxDate', type: 'MOMENT', title: 'حداکثر مقدار', optional: true, maxDate: 'NOW' },
                ],
            },
            {
                rows: [
                    {
                        name: 'moment-disableOn',
                        type: 'MOMENT',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['moment-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                    },
                    {
                        name: 'moment-hideOn',
                        type: 'MOMENT',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['moment-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه پنهان می‌شود.',
                    },
                ],
            },
        ],
    },
];
