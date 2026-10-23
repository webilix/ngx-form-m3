import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';
import { MaskitoDirective } from '@maskito/angular';

import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Helper } from '@webilix/helper-library';

import { AutoCompleteDirective, AutoFocusDirective } from '../../directives';
import { InputErrorPipe, MultiLinePipe } from '../../pipes';
import { INgxFormValues } from '../../ngx-form.interface';
import { INgxFormPlate } from '../../ngx-form.inputs';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputPlate } from './input-plate.interface';

@Component({
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInputModule,
        MatSelectModule,
        MaskitoDirective,
        AutoCompleteDirective,
        AutoFocusDirective,
        InputErrorPipe,
        MultiLinePipe,
    ],
    selector: 'lib-input-plate',
    styleUrl: './input-plate.component.scss',
    templateUrl: './input-plate.component.html',
})
export class InputPlateComponent implements OnInit {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputPlate = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    @Input({ required: true }) values!: INgxFormValues;
    @Input({ required: true }) isButtonDisabled!: boolean;

    protected isFocused: WritableSignal<boolean> = signal(false);
    protected letters: string[] = Helper.PLATE.letters;

    protected readonly regionalOptions: MaskitoOptions = {
        mask: Array.from<RegExp>({ length: 2 }).fill(/\d/),
        preprocessors: [
            // CHANGE PERSIAN NUMBERS
            ({ elementState, data }) => ({ elementState, data: Helper.STRING.changeNumbers(data.toString(), 'EN') }),
        ],
    };
    protected readonly serialOptions: MaskitoOptions = {
        mask: Array.from<RegExp>({ length: 3 }).fill(/\d/),
        preprocessors: [
            // CHANGE PERSIAN NUMBERS
            ({ elementState, data }) => ({ elementState, data: Helper.STRING.changeNumbers(data.toString(), 'EN') }),
        ],
    };
    protected readonly iranOptions: MaskitoOptions = {
        mask: Array.from<RegExp>({ length: 2 }).fill(/\d/),
        preprocessors: [
            // CHANGE PERSIAN NUMBERS
            ({ elementState, data }) => ({ elementState, data: Helper.STRING.changeNumbers(data.toString(), 'EN') }),
        ],
    };

    public regionalFormControl!: FormControl;
    public letterFormControl!: FormControl;
    public serialFormControl!: FormControl;
    public iranFormControl!: FormControl;

    ngOnInit(): void {
        const value: INgxFormPlate | null = this.formControl.value;
        const regional: string | null = value?.regional ?? null;
        const letter: string | null = value?.letter ?? this.input.defaultLetter ?? null;
        const serial: string | null = value?.serial ?? null;
        const iran: string | null = value?.iran ?? null;

        this.regionalFormControl = new FormControl<string | null>(
            regional,
            this.input.optional ? [] : [Validators.required],
        );
        this.letterFormControl = new FormControl<string | null>(letter, this.input.optional ? [] : [Validators.required]);
        this.serialFormControl = new FormControl<string | null>(serial, this.input.optional ? [] : [Validators.required]);
        this.iranFormControl = new FormControl<string | null>(iran, this.input.optional ? [] : [Validators.required]);

        this.formControl.statusChanges.subscribe({
            next: () => {
                if (this.formControl.disabled) {
                    this.regionalFormControl.disable();
                    this.letterFormControl.disable();
                    this.serialFormControl.disable();
                    this.iranFormControl.disable();
                } else {
                    this.regionalFormControl.enable();
                    this.letterFormControl.enable();
                    this.serialFormControl.enable();
                    this.iranFormControl.enable();
                }
            },
        });
    }

    setPlate(): void {
        const regional: string = (this.regionalFormControl.value || '').trim();
        const letter: string = (this.letterFormControl.value || '').trim();
        const serial: string = (this.serialFormControl.value || '').trim();
        const iran: string = (this.iranFormControl.value || '').trim();
        console.log(regional, letter, serial, iran);

        const value: INgxFormPlate | null =
            regional !== '' && letter !== '' && serial !== '' && iran !== '' ? { regional, letter, serial, iran } : null;
        this.formControl.setValue(value);
        this.formControl.markAllAsTouched();

        if (value !== null && this.input.onComplete) this.input.onComplete(value);
    }
}
