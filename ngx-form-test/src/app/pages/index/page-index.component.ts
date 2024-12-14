import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { INgxForm, INgxFormInit, INgxFormValues, NgxFormComponent } from '@webilix/ngx-form-m3';

import { AppService } from '../../app.service';

@Component({
    host: { selector: 'page-index' },
    imports: [NgxFormComponent],
    templateUrl: './page-index.component.html',
    styleUrl: './page-index.component.scss',
})
export class PageIndexComponent implements OnInit {
    private ngForm?: NgForm;
    public ngxForm: INgxForm = {
        submit: 'ثبت فرم',
        inputs: [
            {
                columns: [
                    {
                        header: 'مشخصات',
                        rows: [
                            { name: 'name', type: 'NAME', optional: true },
                            { name: 'mobile', type: 'MOBILE', optional: true },
                            {
                                name: 'gender',
                                type: 'SELECT',
                                title: 'جنسیت',
                                options: [
                                    { id: 'MALE', title: 'مرد' },
                                    { id: 'FEMALE', title: 'زن' },
                                ],
                                optional: true,
                            },
                            { name: 'color', type: 'COLOR', title: 'رنگ چشم', optional: true },
                        ],
                    },
                    {
                        header: 'عضویت',
                        rows: [
                            { name: 'email', type: 'EMAIL', optional: true },
                            { name: 'password', type: 'PASSWORD', optional: true },
                        ],
                    },
                    {
                        header: 'آدرس پستی',
                        rows: [
                            { name: 'city', type: 'TEXT', title: 'شهر', optional: true },
                            {
                                name: 'address',
                                type: 'TEXTAREA',
                                title: 'آدرس',
                                optional: true,
                                description: 'گزینه‌های زیر را در آدرس مشخص کنید:\n - خیابان / کوچه\n - پلاک\n - واحد',
                            },
                        ],
                    },
                ],
            },
        ],
        buttons: [{ title: 'پاک کردن', action: () => this.ngForm?.resetForm() }],
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
