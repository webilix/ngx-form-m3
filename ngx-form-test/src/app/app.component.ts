import { ChangeDetectorRef, Component, OnDestroy, OnInit, RendererFactory2 } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { NgxFormInputs } from '@webilix/ngx-form-m3';

import { AppService } from './app.service';

type ColorMode = 'LIGHT' | 'DARK';

@Component({
    selector: 'app-root',
    host: { '(window:keydown)': 'onKeydown($event)' },
    imports: [RouterLink, RouterOutlet, MatDivider, MatIconButton, MatIcon, MatMenuModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
    public inputs: { title: string; type: NgxFormInputs['type'] }[] = [
        { title: 'لیست تکمیلی', type: 'AUTO-COMPLETE' },
        { title: 'کارت بانکی', type: 'BANK-CARD' },
        { title: 'شماره شبا', type: 'BANK-SHEBA' },
        { title: 'یک انتخابی', type: 'CHECKBOX' },
        { title: 'رنگ', type: 'COLOR' },
        { title: 'کامپوننت', type: 'COMPONENT' },
        { title: 'موقعیت جغرافیایی', type: 'COORDINATES' },
        { title: 'تاریخ', type: 'DATE' },
        { title: 'ایمیل', type: 'EMAIL' },
        { title: 'فایل', type: 'FILE' },
        { title: 'آیکون', type: 'ICON' },
        { title: 'آدرس آی‌پی', type: 'IP' },
        { title: 'لیست مقادیر', type: 'ITEM-LIST' },
        { title: 'موبایل', type: 'MOBILE' },
        { title: 'زمان', type: 'MOMENT' },
        { title: 'چند انتخابی', type: 'MULTI-SELECT' },
        { title: 'نام و نام خانوادگی', type: 'NAME' },
        { title: 'مقدار عددی', type: 'NUMBER' },
        { title: 'لیست گزینه‌ها', type: 'OPTION-LIST' },
        { title: 'کلمه عبور', type: 'PASSWORD' },
        { title: 'قیمت', type: 'PRICE' },
        { title: 'مسیر', type: 'ROUTE' },
        { title: 'لیست کشویی', type: 'SELECT' },
        { title: 'متن یک خطی', type: 'TEXT' },
        { title: 'متن چند خطی', type: 'TEXTAREA' },
        { title: 'آدرس سایت', type: 'URL' },
    ];

    public colorMode!: ColorMode;
    public header?: string;
    private onHeaderChanged!: Subscription;

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly rendererFactory: RendererFactory2,
        private readonly appService: AppService,
    ) {}

    ngOnInit(): void {
        this.header = this.appService.header;
        this.onHeaderChanged = this.appService.onHeaderChanged.subscribe({
            next: (header?: string) => {
                this.header = header;
                this.changeDetectorRef.detectChanges();
            },
        });

        let colorMode: ColorMode = 'LIGHT';
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) colorMode = 'DARK';
        const mode = localStorage.getItem('ColorMode');
        if (mode === 'DARK') colorMode = 'DARK';
        if (mode === 'LIGHT') colorMode = 'LIGHT';
        this.toggleMode(colorMode);
    }

    ngOnDestroy(): void {
        this.onHeaderChanged.unsubscribe();
    }

    onKeydown(event: any): void {
        if (!(event instanceof KeyboardEvent)) return;

        // Use CTRL + SHIFT + ALT + C to toggle mode
        if (event.ctrlKey && event.shiftKey && event.altKey && event.code === 'KeyC') {
            event.preventDefault();
            this.toggleMode();
        }
    }

    toggleMode(colorMode?: ColorMode): void {
        this.colorMode = colorMode || (this.colorMode === 'DARK' ? 'LIGHT' : 'DARK');
        localStorage.setItem('ColorMode', this.colorMode);

        const renderer = this.rendererFactory.createRenderer(null, null);
        if (this.colorMode === 'LIGHT') {
            renderer.removeClass(document.body, 'dark');
        } else {
            renderer.addClass(document.body, 'dark');
        }
    }
}
