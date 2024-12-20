import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { NgxHelperFileSizePipe } from '@webilix/ngx-helper-m3';

import { InputErrorPipe, MultiLinePipe } from '../../pipes';

import { IInputConfig, INPUT_CONFIG, INPUT_CONTROL, INPUT_TYPE } from '../input.interface';

import { IInputFile } from './input-file.interface';

@Component({
    host: { selector: 'input-file' },
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatIcon,
        MatInputModule,
        InputErrorPipe,
        MultiLinePipe,
        NgxHelperFileSizePipe,
    ],
    templateUrl: './input-file.component.html',
    styleUrl: './input-file.component.scss',
})
export class InputFileComponent {
    public formControl: FormControl = inject(INPUT_CONTROL);
    public input: IInputFile = inject(INPUT_TYPE);
    public config: IInputConfig = inject(INPUT_CONFIG);

    setFile(event: Event | null): void {
        if (this.formControl.disabled) return;

        const files: FileList | null = event === null ? null : (event.target as HTMLInputElement).files;
        const file = files && files.length !== 0 ? files.item(0) : null;
        this.formControl.setValue(file);
        this.formControl.markAsTouched();
    }
}
