import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNgxFormConfig } from '@webilix/ngx-form-m3';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes),

        // NGX-FORM-M3
        provideNgxFormConfig({ mobileWidth: 900, submitTimeout: 1 }),
    ],
};
