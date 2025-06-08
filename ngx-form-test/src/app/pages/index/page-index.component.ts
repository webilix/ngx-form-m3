import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { INgxForm, INgxFormInit, INgxFormValues, NgxFormComponent } from '@webilix/ngx-form-m3';

import { DateComponent } from '../../components/date/date.component';
import { WeekComponent } from '../../components/week/week.component';

import { AppService } from '../../app.service';

@Component({
    host: { selector: 'page-index' },
    imports: [NgxFormComponent],
    templateUrl: './page-index.component.html',
    styleUrl: './page-index.component.scss',
})
export class PageIndexComponent implements OnInit {
    public inputButton = {
        icon: 'ads_click',
        color: 'var(--primary)',
        onClick: (values: INgxFormValues) => console.log('BUTTON onClick', values),
        disableOn: (values: INgxFormValues) => !!values['name'],
    };

    private ngForm?: NgForm;
    public ngxForm: INgxForm = {
        submit: 'ثبت فرم',
        inputs: [
            { name: 'change', type: 'TEXT', title: 'تعداد مقادیر', readonly: true },
            {
                columns: [
                    {
                        header: 'مشخصات',
                        rows: [
                            { name: 'name', type: 'NAME', optional: true },
                            { name: 'mobile', type: 'MOBILE', optional: true, button: this.inputButton },
                            { name: 'date', type: 'DATE', title: 'تاریخ تولد', optional: true, button: this.inputButton },
                            {
                                name: 'moment',
                                type: 'MOMENT',
                                title: 'تاریخ استخدام',
                                optional: true,
                                button: this.inputButton,
                            },
                            { name: 'age', type: 'NUMBER', title: 'سن', optional: true, button: this.inputButton },
                            {
                                name: 'income',
                                type: 'PRICE',
                                title: 'درآمد',
                                currency: 'تومان',
                                optional: true,
                                button: this.inputButton,
                            },
                            {
                                name: 'gender',
                                type: 'SELECT',
                                title: 'جنسیت',
                                options: [
                                    { id: 'MALE', title: 'مرد' },
                                    { id: 'FEMALE', title: 'زن' },
                                ],
                                optional: true,
                                button: this.inputButton,
                            },
                            { name: 'color', type: 'COLOR', title: 'رنگ چشم', optional: true, button: this.inputButton },
                            { name: 'file', type: 'FILE', title: 'رزومه', optional: true, button: this.inputButton },
                            { name: 'url', type: 'URL', optional: true, button: this.inputButton },
                        ],
                    },
                    {
                        header: 'عضویت',
                        rows: [
                            { name: 'email', type: 'EMAIL', optional: true, button: this.inputButton },
                            { name: 'password', type: 'PASSWORD', optional: true, button: this.inputButton },
                            {
                                name: 'dateComponent',
                                type: 'COMPONENT',
                                title: 'تاریخ‌ها (نمایش کامپوننت)',
                                component: DateComponent,
                                optional: true,
                                button: this.inputButton,
                            },
                            {
                                name: 'checkbox',
                                type: 'CHECKBOX',
                                message: 'تایید اطلاعات ثبت شده در فرم',
                                button: this.inputButton,
                            },
                            { name: 'ip', type: 'IP', optional: true, button: this.inputButton },
                            { name: 'icon', type: 'ICON', optional: true, button: this.inputButton },
                            {
                                name: 'auto-complete',
                                type: 'AUTO-COMPLETE',
                                title: 'گزینه‌ها',
                                options: ['اول', 'دوم', 'سوم'],
                                optional: true,
                                button: this.inputButton,
                            },
                            { name: 'coordinates', type: 'COORDINATES', optional: true, button: this.inputButton },
                            { name: 'route', type: 'ROUTE', optional: true, button: this.inputButton },
                            { name: 'bank-card', type: 'BANK-CARD', optional: true, button: this.inputButton },
                            { name: 'bank-sheba', type: 'BANK-SHEBA', optional: true, button: this.inputButton },
                        ],
                    },
                    {
                        header: 'آدرس پستی',
                        rows: [
                            { name: 'city', type: 'TEXT', title: 'شهر', optional: true, button: this.inputButton },
                            {
                                name: 'address',
                                type: 'TEXTAREA',
                                title: 'آدرس',
                                optional: true,
                                description: 'گزینه‌های زیر را در آدرس مشخص کنید:\n - خیابان / کوچه\n - پلاک\n - واحد',
                                button: this.inputButton,
                            },
                            {
                                name: 'weekComponent',
                                type: 'COMPONENT',
                                title: 'هفته‌ها (نمایش کامپوننت)',
                                component: WeekComponent,
                                optional: true,
                                button: this.inputButton,
                            },
                            {
                                name: 'multi-select',
                                type: 'MULTI-SELECT',
                                title: 'انتخاب‌ها',
                                options: [...Array(10).keys()].map((index: number) => ({
                                    id: `OPT-${index + 1}`,
                                    title: `انتخاب ${index + 1}`,
                                })),
                            },
                            { name: 'option-list', type: 'OPTION-LIST', title: 'لیست گزینه‌ها' },
                        ],
                    },
                ],
            },
        ],
        buttons: [{ title: 'پاک کردن', action: () => this.ngForm?.resetForm() }],
        updateValues: (values: INgxFormValues) => {
            const count: number = Object.keys(values).filter((key: string) => key !== 'change' && !!values[key]).length;
            return { change: count.toString() };
        },
    };

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.appService.setHeader();
    }

    onInit(init: INgxFormInit): void {
        this.ngForm = init.ngForm;
    }

    onSubmit(values: INgxFormValues): void {
        console.log('onSubmit', values);
    }

    onChange(values: INgxFormValues): void {
        console.log('onChange', values);
    }
}
