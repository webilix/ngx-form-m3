import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders, Provider } from '@angular/core';

export interface INgxFormConfig {
    readonly mobileWidth: number;
    readonly submitTimeout: number;
    readonly headerStyle: { [key: string]: any };
    readonly enStyle: { [key: string]: any };
    readonly descriptionStyle: { [key: string]: any };
}

export const NGX_FORM_CONFIG = new InjectionToken<Partial<INgxFormConfig>>('NGX-FORM-CONFIG');

export const provideNgxFormConfig = (config: Partial<INgxFormConfig>): EnvironmentProviders => {
    const providers: Provider[] = [{ provide: NGX_FORM_CONFIG, useValue: config }];

    return makeEnvironmentProviders(providers);
};
