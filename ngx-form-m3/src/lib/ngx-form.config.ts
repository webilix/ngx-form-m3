import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders, Provider } from '@angular/core';

export interface INgxFormConfig {
    readonly mobileWidth: number;
    readonly submitTimeout: number;
    readonly headerClass: string;
    readonly enClass: string;
    readonly descriptionClass: string;
}

export const NGX_FORM_CONFIG = new InjectionToken<Partial<INgxFormConfig>>('NGX-FORM-CONFIG');

export const provideNgxFormConfig = (config: Partial<INgxFormConfig>): EnvironmentProviders => {
    const providers: Provider[] = [{ provide: NGX_FORM_CONFIG, useValue: config }];

    return makeEnvironmentProviders(providers);
};
