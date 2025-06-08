// COMPONENT
export type NgxFormComponentInputs = { [key: string]: any };

//COORDINATES
export interface INgxFormCoordinates {
    latitude: number;
    longitude: number;
}

// MULTI-SELECT
// SELECT
export interface INgxFormOption {
    readonly id: string;
    readonly title: string;
}

export interface INgxFormOptionGroup {
    readonly title: string;
    readonly ids: string[];
}

// NAME
export interface INgxFormName {
    readonly first: string;
    readonly last: string;
}

// ROUTE
export type NgxFormRoute = INgxFormCoordinates[];
