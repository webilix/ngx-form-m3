import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

export const RouteInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'route',
                        type: 'ROUTE',
                        value: [
                            { latitude: 35.6999215, longitude: 51.3407637 },
                            { latitude: 35.700636, longitude: 51.3405209 },
                            { latitude: 35.7011824, longitude: 51.3400632 },
                            { latitude: 35.701626, longitude: 51.3393814 },
                            { latitude: 35.7018268, longitude: 51.3386996 },
                            { latitude: 35.7018688, longitude: 51.3380271 },
                            { latitude: 35.7017894, longitude: 51.3374293 },
                            { latitude: 35.7017474, longitude: 51.3367195 },
                            { latitude: 35.7016587, longitude: 51.336075 },
                            { latitude: 35.7014112, longitude: 51.3355893 },
                            { latitude: 35.7010983, longitude: 51.335225 },
                            { latitude: 35.700636, longitude: 51.3348794 },
                            { latitude: 35.7001643, longitude: 51.3346272 },
                            { latitude: 35.6997207, longitude: 51.3345712 },
                            { latitude: 35.6991556, longitude: 51.3347206 },
                            { latitude: 35.6985438, longitude: 51.3350849 },
                            { latitude: 35.6980628, longitude: 51.335636 },
                            { latitude: 35.6977312, longitude: 51.3363925 },
                            { latitude: 35.6976798, longitude: 51.3373545 },
                            { latitude: 35.6976751, longitude: 51.3383352 },
                            { latitude: 35.6978852, longitude: 51.3392225 },
                            { latitude: 35.698142, longitude: 51.339895 },
                            { latitude: 35.6985109, longitude: 51.34039 },
                            { latitude: 35.6989639, longitude: 51.3406048 },
                            { latitude: 35.6995943, longitude: 51.3408009 },
                        ],
                        appearance: 'fill',
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    { name: 'route-optional', type: 'ROUTE', title: 'اختیاری', optional: true },
                ],
            },
            {
                rows: [
                    { name: 'route-zoom', type: 'ROUTE', title: 'زوم', optional: true, zoom: 17 },
                    {
                        name: 'route-center',
                        type: 'ROUTE',
                        title: 'نمایش نقشه',
                        optional: true,
                        center: { latitude: 37.3953577, longitude: 57.9301146 },
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'route-disableOn',
                        type: 'ROUTE',
                        title: 'غیرفعال شدن',
                        optional: true,
                        disableOn: (values) => !!values['route-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'route-hideOn',
                        type: 'ROUTE',
                        title: 'پنهان شدن',
                        optional: true,
                        hideOn: (values) => !!values['route-optional'],
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
