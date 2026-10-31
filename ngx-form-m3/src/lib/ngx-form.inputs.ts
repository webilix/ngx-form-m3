// COMPONENT
export type NgxFormComponentInputs = { [key: string]: any };

//COORDINATES
export interface INgxFormCoordinates {
    readonly latitude: number;
    readonly longitude: number;
}

// MULTI-SELECT
// SELECT
export interface INgxFormGroupOption {
    readonly group: string;
    readonly options: {
        readonly id: string;
        readonly title: string;
    }[];
}

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

// PLATE
export interface INgxFormPlate {
    readonly regional: string;
    readonly letter: string;
    readonly serial: string;
    readonly iran: string;
}

// ROUTE
export type NgxFormRoute = INgxFormCoordinates[];
