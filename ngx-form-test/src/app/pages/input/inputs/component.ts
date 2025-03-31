import { INgxFormValues, NgxFormInputs } from '@webilix/ngx-form-m3';

import { DateComponent } from '../../../components/date/date.component';
import { WeekComponent } from '../../../components/week/week.component';

export const ComponentInputs: { columns: { rows: NgxFormInputs[] }[] }[] = [
    {
        columns: [
            {
                rows: [
                    {
                        name: 'component',
                        type: 'COMPONENT',
                        title: 'روز‌ها',
                        value: [new Date()],
                        component: DateComponent,
                        hint: 'راهنما: مقدار الزامی است.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'component-week',
                        type: 'COMPONENT',
                        title: 'هفته‌ها (کامپوننت متفاوت)',
                        value: [new Date()],
                        component: WeekComponent,
                        hint: 'راهنما: مقدار الزامی است.',
                    },
                    {
                        name: 'component-optional',
                        type: 'COMPONENT',
                        title: 'اختیاری',
                        component: DateComponent,
                        optional: true,
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'component-min-items',
                        type: 'COMPONENT',
                        title: 'حداقل تعداد',
                        optional: true,
                        component: DateComponent,
                        componentInputs: { minItems: 2 },
                        appearance: 'fill',
                    },
                    {
                        name: 'component-max-items',
                        type: 'COMPONENT',
                        title: 'حداکثر تعداد',
                        optional: true,
                        component: DateComponent,
                        componentInputs: { maxItems: 2 },
                        appearance: 'fill',
                    },
                    {
                        name: 'component-unique',
                        type: 'COMPONENT',
                        title: 'غیر تکراری',
                        optional: true,
                        component: DateComponent,
                        componentInputs: { unique: true },
                        appearance: 'fill',
                    },
                ],
            },
            {
                rows: [
                    {
                        name: 'component-disableOn',
                        type: 'COMPONENT',
                        title: 'غیرفعال شدن',
                        optional: true,
                        component: DateComponent,
                        disableOn: (values) => !!values['component-optional'],
                        description: 'در صورت مشخص کردن مقدار اختیاری، این گزینه غیرفعال می‌شود.',
                        button: {
                            icon: 'ads_click',
                            color: 'var(--primary)',
                            onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
                            disableOn: (values: INgxFormValues) => !!values['name'],
                        },
                    },
                    {
                        name: 'component-hideOn',
                        type: 'COMPONENT',
                        title: 'پنهان شدن',
                        optional: true,
                        component: DateComponent,
                        hideOn: (values) => !!values['component-optional'],
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
