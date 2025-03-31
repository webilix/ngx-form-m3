import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[AutoFocusDirective]' })
export class AutoFocusDirective implements AfterViewInit {
    @Input({ required: true }) public AutoFocusDirective!: boolean;

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        if (!this.AutoFocusDirective || !this.elementRef) return;

        const input: HTMLInputElement = this.elementRef.nativeElement as HTMLInputElement;
        if (!input) return;

        setTimeout(() => input.focus && input.focus(), 0);
    }
}
