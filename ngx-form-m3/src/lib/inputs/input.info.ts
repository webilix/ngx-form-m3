import { NgxFormInputs } from '../ngx-form.interface';

import { FormInputMethods } from './input.interface';
import {
    FormInputEmailMethods,
    FormInputMobileMethods,
    FormInputNameMethods,
    FormInputTextareaMethods,
    FormInputTextMethods,
} from '.';

interface IFormInputInfo {
    readonly title: string;
    readonly methods: FormInputMethods<any, any>;
}

export const FormInputInfo: { [key in NgxFormInputs['type']]: IFormInputInfo } = {
    EMAIL: { title: 'ایمیل', methods: new FormInputEmailMethods() },
    MOBILE: { title: 'موبایل', methods: new FormInputMobileMethods() },
    NAME: { title: 'نام و نام خانوادگی', methods: new FormInputNameMethods() },
    TEXT: { title: 'متن یک خطی', methods: new FormInputTextMethods() },
    TEXTAREA: { title: 'متن چند خطی', methods: new FormInputTextareaMethods() },
};
