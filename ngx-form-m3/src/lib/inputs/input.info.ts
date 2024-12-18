import { ComponentType } from '@angular/cdk/portal';

import { NgxFormInputs } from '../ngx-form.interface';

import { InputMethods } from './input.interface';
import {
    InputColorComponent,
    InputColorMethods,
    InputDateComponent,
    InputDateMethods,
    InputEmailComponent,
    InputEmailMethods,
    InputMobileComponent,
    InputMobileMethods,
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
} from '.';

export const InputInfo: {
    [key in NgxFormInputs['type']]: {
        readonly title: string;
        readonly methods: InputMethods<any, any>;
        readonly component: ComponentType<any>;
    };
} = {
    COLOR: { title: 'رنگ', methods: new InputColorMethods(), component: InputColorComponent },
    DATE: { title: 'تاریخ', methods: new InputDateMethods(), component: InputDateComponent },
    EMAIL: { title: 'ایمیل', methods: new InputEmailMethods(), component: InputEmailComponent },
    MOBILE: { title: 'موبایل', methods: new InputMobileMethods(), component: InputMobileComponent },
    NAME: { title: 'نام و نام خانوادگی', methods: new InputNameMethods(), component: InputNameComponent },
    PASSWORD: { title: 'کلمه عبور', methods: new InputPasswordMethods(), component: InputPasswordComponent },
    SELECT: { title: 'لیست کشویی', methods: new InputSelectMethods(), component: InputSelectComponent },
    TEXT: { title: 'متن یک خطی', methods: new InputTextMethods(), component: InputTextComponent },
    TEXTAREA: { title: 'متن چند خطی', methods: new InputTextareaMethods(), component: InputTextareaComponent },
};
