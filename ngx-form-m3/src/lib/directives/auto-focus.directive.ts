import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { timer } from 'rxjs';

@Directive({ selector: '[AutoFocusDirective]' })
export class AutoFocusDirective implements AfterViewInit {
    @Input({ required: true }) public AutoFocusDirective!: boolean;

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        if (!this.AutoFocusDirective || !this.elementRef) return;

        const input: HTMLInputElement = this.elementRef.nativeElement as HTMLInputElement;
        if (!input) return;

        timer(0).subscribe(() => input.focus && input.focus());
    }
}
