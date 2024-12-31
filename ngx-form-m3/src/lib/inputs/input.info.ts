import { ComponentType } from '@angular/cdk/portal';

import { NgxFormInputs } from '../ngx-form.interface';

import { InputMethods } from './input.interface';
import {
    InputCheckboxComponent,
    InputCheckboxMethods,
    InputColorComponent,
    InputColorMethods,
    InputComponentComponent,
    InputComponentMethods,
    InputDateComponent,
    InputDateMethods,
    InputEmailComponent,
    InputEmailMethods,
    InputFileComponent,
    InputFileMethods,
    InputIpComponent,
    InputIpMethods,
    InputMobileComponent,
    InputMobileMethods,
    InputMomentComponent,
    InputMomentMethods,
    InputNameComponent,
    InputNameMethods,
    InputNumberComponent,
    InputNumberMethods,
    InputPasswordComponent,
    InputPasswordMethods,
    InputSelectComponent,
    InputSelectMethods,
    InputTextareaComponent,
    InputTextareaMethods,
    InputTextComponent,
    InputTextMethods,
    InputUrlComponent,
    InputUrlMethods,
} from '.';

export const InputInfo: {
    [key in NgxFormInputs['type']]: {
        readonly title: string;
        readonly methods: InputMethods<any, any>;
        readonly component: ComponentType<any>;
    };
} = {
    CHECKBOX: { title: 'یک انتخابی', methods: new InputCheckboxMethods(), component: InputCheckboxComponent },
    COLOR: { title: 'رنگ', methods: new InputColorMethods(), component: InputColorComponent },
    COMPONENT: { title: 'کامپوننت', methods: new InputComponentMethods(), component: InputComponentComponent },
    DATE: { title: 'تاریخ', methods: new InputDateMethods(), component: InputDateComponent },
    EMAIL: { title: 'ایمیل', methods: new InputEmailMethods(), component: InputEmailComponent },
    FILE: { title: 'فایل', methods: new InputFileMethods(), component: InputFileComponent },
    IP: { title: 'آدرس آی‌پی', methods: new InputIpMethods(), component: InputIpComponent },
    MOBILE: { title: 'موبایل', methods: new InputMobileMethods(), component: InputMobileComponent },
    MOMENT: { title: 'زمان', methods: new InputMomentMethods(), component: InputMomentComponent },
    NAME: { title: 'نام و نام خانوادگی', methods: new InputNameMethods(), component: InputNameComponent },
    NUMBER: { title: 'مقدار عددی', methods: new InputNumberMethods(), component: InputNumberComponent },
    PASSWORD: { title: 'کلمه عبور', methods: new InputPasswordMethods(), component: InputPasswordComponent },
    SELECT: { title: 'لیست کشویی', methods: new InputSelectMethods(), component: InputSelectComponent },
    TEXT: { title: 'متن یک خطی', methods: new InputTextMethods(), component: InputTextComponent },
    TEXTAREA: { title: 'متن چند خطی', methods: new InputTextareaMethods(), component: InputTextareaComponent },
    URL: { title: 'آدرس سایت', methods: new InputUrlMethods(), component: InputUrlComponent },
};
