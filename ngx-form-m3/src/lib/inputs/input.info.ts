import { ComponentType } from '@angular/cdk/portal';

import { NgxFormInputs } from '../ngx-form.interface';

import { InputMethods } from './input.interface';
import {
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
    InputMobileComponent,
    InputMobileMethods,
    InputMomentComponent,
    InputMomentMethods,
    InputNameComponent,
    InputNameMethods,
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
    COLOR: { title: 'رنگ', methods: new InputColorMethods(), component: InputColorComponent },
    COMPONENT: { title: 'کامپوننت', methods: new InputComponentMethods(), component: InputComponentComponent },
    DATE: { title: 'تاریخ', methods: new InputDateMethods(), component: InputDateComponent },
    EMAIL: { title: 'ایمیل', methods: new InputEmailMethods(), component: InputEmailComponent },
    FILE: { title: 'فایل', methods: new InputFileMethods(), component: InputFileComponent },
    MOBILE: { title: 'موبایل', methods: new InputMobileMethods(), component: InputMobileComponent },
    MOMENT: { title: 'زمان', methods: new InputMomentMethods(), component: InputMomentComponent },
    NAME: { title: 'نام و نام خانوادگی', methods: new InputNameMethods(), component: InputNameComponent },
    PASSWORD: { title: 'کلمه عبور', methods: new InputPasswordMethods(), component: InputPasswordComponent },
    SELECT: { title: 'لیست کشویی', methods: new InputSelectMethods(), component: InputSelectComponent },
    TEXT: { title: 'متن یک خطی', methods: new InputTextMethods(), component: InputTextComponent },
    TEXTAREA: { title: 'متن چند خطی', methods: new InputTextareaMethods(), component: InputTextareaComponent },
    URL: { title: 'آدرس سایت', methods: new InputUrlMethods(), component: InputUrlComponent },
};
