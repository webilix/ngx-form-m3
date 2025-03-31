import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const CoordinatesInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'coordinates',
                        type: 'COORDINATES',
                        value: { latitude: 35.6997382, longitude: 51.3380603 },
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'coordinates-optional', type: 'COORDINATES', title: 'اختیاری', optional: true },
                ],
            },
            {
                rows: [
                    { name: 'coordinates-zoom', type: 'COORDINATES', title: 'زوم', optional: true, zoom: 17 },
                    {
                        name: 'coordinates-center',
                        type: 'COORDINATES',
                        title: 'نمایش نقشه',
                        optional: true,
                        center: { latitude: 37.3953577, longitude: 57.9301146 },
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'coordinates-disableOn',
                        type: 'COORDINATES',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['coordinates-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'coordinates-hideOn',
                        type: 'COORDINATES',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['coordinates-optional'],
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
