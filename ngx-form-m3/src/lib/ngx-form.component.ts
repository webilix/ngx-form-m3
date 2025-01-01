import {
    AfterViewInit,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnChanges,
    OnInit,
    Optional,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { FormGroup, NgForm, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButton } from '@angular/material/button';

import { FormErrorDirective } from './directives';
import { IInputConfig, InputComponent, InputInfo } from './inputs';

import { INgxFormConfig, NGX_FORM_CONFIG } from './ngx-form.config';
import { INgxForm, INgxFormInit, INgxFormValues, NgxFormInputs } from './ngx-form.interface';

interface IRow {
    header: string;
    inputs: NgxFormInputs[];
    flex: number[];
}

interface IColumn {
    header: string;
    rows: IRow[];
}

interface ISection {
    header: string;
    columns: IColumn[];
    flex: number[];
}

@Component({
    selector: 'ngx-form',
    imports: [ReactiveFormsModule, MatButton, InputComponent, FormErrorDirective],
    templateUrl: './ngx-form.component.html',
    styleUrl: './ngx-form.component.scss',
})
export class NgxFormComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('formObject') ngForm?: NgForm;

    @HostListener('window:resize', ['$event'])
    onResize = (event: any): void => this.setSize();

    @Input({ required: true }) ngxForm!: INgxForm;
    @Output() onInit: EventEmitter<INgxFormInit> = new EventEmitter<INgxFormInit>();
    @Output() onSubmit: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();
    @Output() onChange: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();

    protected formGroup!: FormGroup;

    protected sections: ISection[] = [];
    protected hiddenInputs: string[] = [];
    protected values: INgxFormValues = {};
    protected lastValues: INgxFormValues = {};
    protected lastSubmit?: Date;

    protected isMobile: boolean = false;
    protected inputConfig!: IInputConfig;

    constructor(
        private readonly router: Router,
        @Optional() @Inject(NGX_FORM_CONFIG) private readonly config?: Partial<INgxFormConfig>,
    ) {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({});
        const inputs: NgxFormInputs[] = this.getInputs();

        // SET FORM GROUP INPUTS
        inputs.forEach((input: NgxFormInputs) => this.setInput(input));

        // CHECK AUTO FOCUS
        let autoFocus: string | undefined = undefined;
        inputs.forEach((input: NgxFormInputs) => {
            if (!('autoFocus' in input) || !input.autoFocus || autoFocus) return;
            if (!input.disableOn && !input.hideOn) autoFocus = input.name;
        });

        // INPUT CONFIG
        this.inputConfig = {
            appearance: this.ngxForm.appearance || 'fill',
            autoFocus,
        };

        // REGISTER VALUE CHANGE
        this.formGroup.valueChanges.subscribe({
            next: () => {
                const changedInputs: string[] = [];
                [...Object.keys(this.lastValues), ...Object.keys(this.formGroup.value)]
                    .filter((key: string, index: number, arr: string[]) => arr.indexOf(key) === index)
                    .forEach((key: string) => {
                        if (this.formGroup.value[key] !== this.lastValues[key]) changedInputs.push(key);
                    });
                if (changedInputs.length === 0) return;
                this.lastValues = { ...this.formGroup.value };

                this.checkInputs();

                if (this.ngxForm.updateValues) {
                    const values: INgxFormValues = this.getValues();
                    const changes: { [key: string]: any } = this.ngxForm.updateValues(values);

                    Object.keys(changes)
                        .filter((key: string) => !changedInputs.includes(key))
                        .forEach((key: string) => {
                            const input = this.getInputs().find((i) => i.name === key);
                            if (!input) return;

                            const formInput = this.formGroup.get(key);
                            if (!formInput) return;

                            const value = InputInfo[input.type].methods.value(changes[key], input);
                            formInput.setValue(value);
                        });
                    this.lastValues = { ...this.formGroup.value };
                }

                this.values = this.getValues();
                this.onChange.next(this.values);
            },
        });

        this.checkInputs();
        this.setSize();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.sections = [];
        this.ngxForm.inputs.forEach((inputs) => {
            // SECTION
            if ('columns' in inputs) {
                this.sections.push({
                    header: inputs.header || '',
                    columns: inputs.columns.map((column) => {
                        return {
                            header: column.header || '',
                            rows: column.rows.map((row) =>
                                'inputs' in row
                                    ? {
                                          header: row.header || '',
                                          inputs: row.inputs,
                                          flex: row.inputs.map((_, i) => row.flex?.[i] || 1),
                                      }
                                    : 'input' in row
                                    ? { header: row.header, inputs: [row.input], flex: [1] }
                                    : { header: '', inputs: [row], flex: [1] },
                            ),
                            flex: [],
                        };
                    }),
                    flex: inputs.columns.map((_, c) => inputs.flex?.[c] || 1),
                });
                return;
            }

            // INPUTS
            if ('inputs' in inputs) {
                this.sections.push({
                    header: inputs.header || '',
                    columns: [
                        {
                            header: '',
                            rows: [
                                {
                                    header: '',
                                    inputs: inputs.inputs,
                                    flex: inputs.inputs.map((_, i) => inputs.flex?.[i] || 1),
                                },
                            ],
                        },
                    ],
                    flex: [1],
                });
                return;
            }

            // HEADER
            if ('input' in inputs) {
                this.sections.push({
                    header: inputs.header || '',
                    columns: [{ header: '', rows: [{ header: '', inputs: [inputs.input], flex: [1] }] }],
                    flex: [1],
                });
                return;
            }

            // INPUT
            this.sections.push({
                header: '',
                columns: [{ header: '', rows: [{ header: '', inputs: [inputs], flex: [1] }] }],
                flex: [1],
            });
        });
    }

    ngAfterViewInit(): void {
        this.onInit.next({ formGroup: this.formGroup, ngForm: this.ngForm });
    }

    getInputs(): NgxFormInputs[] {
        const list: NgxFormInputs[] = [];

        this.ngxForm.inputs.forEach((inputs) => {
            // SECTION
            if ('columns' in inputs) {
                inputs.columns.forEach((column) => {
                    column.rows.forEach((row) => {
                        if ('inputs' in row) list.push(...row.inputs);
                        else list.push('input' in row ? row.input : row);
                    });
                });
                return;
            }

            // INPUTS
            if ('inputs' in inputs) list.push(...inputs.inputs);
            else list.push('input' in inputs ? inputs.input : inputs);
        });

        return list;
    }

    getValues(): INgxFormValues {
        const inputs: NgxFormInputs[] = this.getInputs();
        const values: INgxFormValues = {};

        const getValue = (input: NgxFormInputs): any => {
            if (this.hiddenInputs.includes(input.name)) return null;

            const formInput = this.formGroup.get(input.name);
            if (!formInput || formInput.disabled || formInput.errors !== null) return null;

            const value: any = InputInfo[input.type].methods.value(formInput.value, input);
            return value;
        };

        inputs.forEach((input: NgxFormInputs) => {
            values[input.name] = getValue(input);
        });

        return values;
    }

    setInput(input: NgxFormInputs): void {
        const name: string = input.name;
        const readonly: boolean = 'readonly' in input && !!input.readonly;
        const validators: ValidatorFn[] =
            input.type === 'CHECKBOX' || input.type === 'MULTI-SELECT' || input.optional || readonly
                ? []
                : [Validators.required];

        this.formGroup.setControl(name, InputInfo[input.type].methods.control(input, validators));
    }

    checkInputs(): void {
        const inputs: NgxFormInputs[] = this.getInputs();
        const values: INgxFormValues = this.getValues();

        // CHECK DISABLED INPUTS
        inputs.forEach((input: NgxFormInputs) => {
            if (!('disableOn' in input) || !input.disableOn) return;

            const formInput = this.formGroup.get(input.name);
            if (!formInput) return;

            const disabled: boolean = input.disableOn(values);
            disabled ? formInput.disable() : formInput.enable();
        });

        // CHECK HIDDEN INPUTS
        this.hiddenInputs = [];
        inputs.forEach((input: NgxFormInputs) => {
            if (!('hideOn' in input) || !input.hideOn) return;

            const formInput = this.formGroup.get(input.name);
            if (!formInput) return;

            const hidden: boolean = input.hideOn(values);
            hidden ? formInput.disable() : formInput.enable();
            if (hidden) this.hiddenInputs.push(input.name);
        });
    }

    checkSubmit(): void {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) return;

        const submitTimeout = this.config?.submitTimeout;
        if (!!submitTimeout && this.lastSubmit) {
            const timeout: number = submitTimeout * 1000;
            const duration: number = new Date().getTime() - this.lastSubmit.getTime();
            if (duration < timeout) return;
        }

        this.onSubmit.next(this.getValues());
        this.lastSubmit = new Date();
    }

    setSize(): void {
        const mobileWidth: number = this.config?.mobileWidth || 600;
        this.isMobile = this.ngxForm.mobileView || window.innerWidth <= mobileWidth;
    }

    showSection(section: ISection): boolean {
        for (let c = 0; c < section.columns.length; c++) {
            if (this.showColumn(section.columns[c])) return true;
        }

        return false;
    }

    showColumn(column: IColumn): boolean {
        for (let r = 0; r < column.rows.length; r++) {
            if (this.showRow(column.rows[r])) return true;
        }

        return false;
    }

    showRow(row: IRow): boolean {
        for (let i = 0; i < row.inputs.length; i++) {
            if (this.showInput(row.inputs[i])) return true;
        }

        return false;
    }

    showInput(input: NgxFormInputs): boolean {
        return !this.hiddenInputs.includes(input.name);
    }

    onClick(action: string[] | (() => void)): void {
        if (typeof action === 'function') action();
        else this.router.navigate(action);
    }
}
