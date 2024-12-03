import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INgxForm, INgxFormInit, INgxFormValues, NgxFormComponent } from '@webilix/ngx-form-m3';

@Component({
    host: { selector: 'page-index' },
    imports: [NgxFormComponent],
    templateUrl: './page-index.component.html',
    styleUrl: './page-index.component.scss',
})
export class PageIndexComponent {
    private ngForm?: NgForm;
    public ngxForm: INgxForm = {
        submit: 'ثبت فرم',
        inputs: [
            {
                columns: [
                    {
                        header: 'آدرس پستی',
                        rows: [
                            { name: 'city', type: 'TEXT', title: 'شهر', optional: true },
                            { name: 'address', type: 'TEXTAREA', title: 'آدرس', optional: true },
                        ],
                    },
                ],
            },
        ],
        buttons: [{ title: 'پاک کردن', action: () => this.ngForm?.resetForm() }],
    };

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
