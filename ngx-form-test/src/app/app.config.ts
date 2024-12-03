import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNgxFormConfig } from '@webilix/ngx-form-m3';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimationsAsync(),

        // NGX-FORM-M3
        provideNgxFormConfig({
            mobileWidth: 900,
            submitTimeout: 1,
            headerStyle: {
                'font-size': '14px',
                'background-color': 'var(--mdc-filled-text-field-container-color)',
                'border-width': 0,
                'border-radius': 0,
                'border-right': '2px solid var(--secondary-fixed)',
                color: 'var(--secondary)',
            },
            enStyle: { 'font-family': 'Roboto, "Helvetica Neue", sans-serif' },
            descriptionStyle: { 'font-size': '11px', 'line-height': '18px', color: 'var(--outline)' },
        }),
    ],
};
