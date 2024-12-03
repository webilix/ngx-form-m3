import { NgxFormInputs } from '../ngx-form.interface';

import { InputMethods } from './input.interface';
import {
    FormInputEmailMethods,
    FormInputMobileMethods,
    FormInputNameMethods,
    FormInputPasswordMethods,
    FormInputTextareaMethods,
    FormInputTextMethods,
} from '.';

interface IInputInfo {
    readonly title: string;
    readonly methods: InputMethods<any, any>;
}

export const FormInputInfo: { [key in NgxFormInputs['type']]: IInputInfo } = {
    EMAIL: { title: 'ایمیل', methods: new FormInputEmailMethods() },
    MOBILE: { title: 'موبایل', methods: new FormInputMobileMethods() },
    NAME: { title: 'نام و نام خانوادگی', methods: new FormInputNameMethods() },
    PASSWORD: { title: 'کلمه عبور', methods: new FormInputPasswordMethods() },
    TEXT: { title: 'متن یک خطی', methods: new FormInputTextMethods() },
    TEXTAREA: { title: 'متن چند خطی', methods: new FormInputTextareaMethods() },
};
