export declare enum BadRequestCode {
    AccountQuotaExceeded = 200,
    ProviderKeyMissing = 300,
    ProviderKeyInvalid = 301
}
export declare class UnauthorizedError extends Error {
    constructor();
}
export declare class ForbiddenError extends Error {
    constructor();
}
export declare class InvalidParameterError extends Error {
    field: string;
    constructor(field: string);
}
export declare class BadRequestError extends Error {
    code: BadRequestCode;
    error: string;
    constructor(code: BadRequestCode, error: string);
}
export declare class UnavailableError extends Error {
    constructor();
}
export declare class UnknownError extends Error {
    constructor();
}
export type TemplatelessError = UnauthorizedError | ForbiddenError | InvalidParameterError | BadRequestError | UnavailableError | UnknownError;
export type Result<T> = T | TemplatelessError;
