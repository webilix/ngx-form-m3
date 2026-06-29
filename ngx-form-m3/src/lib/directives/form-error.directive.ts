import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { timer } from 'rxjs';

@Directive({ selector: 'form.ngx-form' })
export class FormErrorDirective {
    @HostListener('submit') onSubmit(): void {
        timer(150).subscribe(() => {
            const invalidControl: HTMLElement = this.elementRef.nativeElement.querySelector('.mat-form-field-invalid');
            if (invalidControl) return this.scrollToElement(invalidControl);
        });
    }

    constructor(
        private elementRef: ElementRef,
        @Optional() private formGroupDirective: FormGroupDirective,
    ) {}

    private getElementTop(element: HTMLElement): number {
        return element.getBoundingClientRect().top + window.scrollY - 100;
    }

    private scrollToElement(element: HTMLElement): void {
        window.scroll({ top: this.getElementTop(element), behavior: 'smooth' });
    }
}
