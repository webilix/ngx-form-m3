import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { INgxForm, INgxFormValues, NgxFormComponent, NgxFormInputs } from '@webilix/ngx-form-m3';

import { AppService } from '../../app.service';

import {
    AutoCompleteInputs,
    BankCardInputs,
    BankShebaInputs,
    CheckboxInputs,
    ColorInputs,
    ComponentInputs,
    CoordinatesInputs,
    DateInputs,
    EmailInputs,
    FileInputs,
    IconInputs,
    IpInputs,
    ItemListInputs,
    MobileInputs,
    MomentInputs,
    MultiSelectInputs,
    NameInputs,
    NumberInputs,
    OptionListInputs,
    PasswordInputs,
    PriceInputs,
    RouteInputs,
    SelectInputs,
    TagInputs,
    TextareaInputs,
    TextInputs,
    UrlInputs,
    UsernameInputs,
} from './inputs';

@Component({
    host: { selector: 'page-input' },
    imports: [NgxFormComponent],
    templateUrl: './page-input.component.html',
    styleUrl: './page-input.component.scss',
})
export class PageInputComponent implements OnInit {
    public init: boolean = false;
    public type!: NgxFormInputs['type'];

    public inputs: { [key in NgxFormInputs['type']]: { columns: { rows: NgxFormInputs[] }[] }[] } = {
        'AUTO-COMPLETE': AutoCompleteInputs,
        'BANK-CARD': BankCardInputs,
        'BANK-SHEBA': BankShebaInputs,
        CHECKBOX: CheckboxInputs,
        COLOR: ColorInputs,
        COMPONENT: ComponentInputs,
        COORDINATES: CoordinatesInputs,
        DATE: DateInputs,
        EMAIL: EmailInputs,
        FILE: FileInputs,
        ICON: IconInputs,
        IP: IpInputs,
        'ITEM-LIST': ItemListInputs,
        MOBILE: MobileInputs,
        MOMENT: MomentInputs,
        'MULTI-SELECT': MultiSelectInputs,
        NAME: NameInputs,
        NUMBER: NumberInputs,
        'OPTION-LIST': OptionListInputs,
        PASSWORD: PasswordInputs,
        PRICE: PriceInputs,
        ROUTE: RouteInputs,
        SELECT: SelectInputs,
        TAG: TagInputs,
        TEXT: TextInputs,
        TEXTAREA: TextareaInputs,
        URL: UrlInputs,
        USERNAME: UsernameInputs,
    };

    public ngxForm: INgxForm = {
        submit: 'ثبت',
        inputs: [],
        appearance: 'outline',
    };

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly appService: AppService,
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe({
            next: (params: Params) => {
                this.init = false;
                const type: string = params['INPUT'];
                if (!type || !Object.keys(this.inputs).includes(type)) {
                    this.router.navigate(['/']);
                    return;
                }

                setTimeout(() => {
                    this.init = true;
                    this.type = type as NgxFormInputs['type'];
                    this.ngxForm = { ...this.ngxForm, inputs: this.inputs[this.type] };
                    this.appService.setHeader(this.type);
                }, 0);
            },
        });
    }

    onSubmit(values: INgxFormValues): void {
        console.log('onSubmit', values);
    }
}
