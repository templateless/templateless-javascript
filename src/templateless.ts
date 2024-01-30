import axios from 'axios'

import pkg from '../package.json'
import {
  Email,
  Result,
  ObjectId,
  UnauthorizedError,
  ForbiddenError,
  InvalidParameterError,
  BadRequestError,
  UnavailableError,
  UnknownError,
} from '.'

export interface EmailResponse {
  emails: ObjectId[]
}

export class Templateless {
  private _apiKey: string
  private _domain: string

  constructor(apiKey: string) {
    this._apiKey = apiKey
    this._domain = 'https://api.templateless.com'
  }

  domain(domain: string): this {
    this._domain = domain
    return this
  }

  async send(email: Email): Promise<Result<ObjectId[]>> {
    return this.sendMany([email])
  }

  async sendMany(emails: Email[]): Promise<Result<ObjectId[]>> {
    try {
      const response = await axios.post(
        `${this._domain}/v1/emails`,
        {
          payload: emails,
        },
        {
          headers: {
            Authorization: `Bearer ${this._apiKey}`,
            Referer: `${pkg.name} v${pkg.version}`,
          },
        },
      )

      switch (response.status) {
        case 401:
          throw new UnauthorizedError()
        case 403:
          throw new ForbiddenError()
        case 422:
          throw new InvalidParameterError(response.data.field)
        case 400:
          throw new BadRequestError(response.data.code, response.data.error)
        case 500:
          throw new UnavailableError()
        case 200:
          const emailResponse = response.data as EmailResponse
          return emailResponse.emails
        default:
          throw new UnknownError()
      }
    } catch (error) {
      return new UnknownError()
    }
  }
}
