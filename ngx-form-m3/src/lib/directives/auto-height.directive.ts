import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[AutoHeightDirective]' })
export class AutoHeightDirective {
    @Input({ required: true }) public AutoHeightDirective!: boolean;
    @Input({ required: true }) public minHeight!: number;
    @Input({ required: false }) public maxHeight: number = 0;

    private _focused: boolean = false;
    @HostListener('focus')
    protected focus(): void {
        this._focused = true;
    }
    @HostListener('blur')
    protected blur(): void {
        this._focused = false;
    }

    constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

    public ngAfterViewInit(): void {
        this.resize(true);
    }

    @HostListener('input')
    protected resize(forced?: boolean): void {
        if (this.AutoHeightDirective !== true || (!forced && !this._focused)) return;

        const textarea = this.elementRef.nativeElement as HTMLTextAreaElement;
        const borderHeight = textarea.offsetHeight - textarea.clientHeight;
        this.setHeight('auto');

        let height: number = textarea.scrollHeight + borderHeight;
        if (this.minHeight && this.minHeight > height) height = this.minHeight;
        if (this.maxHeight && this.maxHeight < height) height = this.maxHeight;
        this.setHeight(`${height}px`);
    }

    private setHeight(value: string): void {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'height', value);
        this.renderer2.setStyle(this.elementRef.nativeElement, 'overflow', 'auto');
    }
}
