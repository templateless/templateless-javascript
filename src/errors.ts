export enum BadRequestCode {
  AccountQuotaExceeded = 200,
  ProviderKeyMissing = 300,
  ProviderKeyInvalid = 301,
  EmailNoContent = 400,
}

export class UnauthorizedError extends Error {
  constructor() {
    super('unauthorized')
    this.name = 'UnauthorizedError'
  }
}

export class ForbiddenError extends Error {
  constructor() {
    super('forbidden')
    this.name = 'ForbiddenError'
  }
}

export class InvalidParameterError extends Error {
  field: string

  constructor(field: string) {
    super('invalid parameter')
    this.field = field
    this.name = 'InvalidParameterError'
  }
}

export class BadRequestError extends Error {
  code: BadRequestCode
  error: string

  constructor(code: BadRequestCode, error: string) {
    super('bad request')
    this.code = code
    this.error = error
    this.name = 'BadRequestError'
  }
}

export class UnavailableError extends Error {
  constructor() {
    super('unavailable')
    this.name = 'UnavailableError'
  }
}

export class UnknownError extends Error {
  constructor() {
    super('unknown error')
    this.name = 'UnknownError'
  }
}

export type TemplatelessError =
  | UnauthorizedError
  | ForbiddenError
  | InvalidParameterError
  | BadRequestError
  | UnavailableError
  | UnknownError

export type Result<T> = T | TemplatelessError
