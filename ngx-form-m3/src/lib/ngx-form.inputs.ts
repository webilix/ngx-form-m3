// COMPONENT
export type NgxFormComponentInputs = { [key: string]: any };

//COORDINATES
export interface INgxFormCoordinates {
    readonly latitude: number;
    readonly longitude: number;
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

// OPTION LIST
export interface INgxFormOptionList {
    readonly id: string | null;
    readonly title: string;
}

// ROUTE
export type NgxFormRoute = INgxFormCoordinates[];
