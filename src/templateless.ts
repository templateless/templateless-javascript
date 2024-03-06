import axios from 'axios'

import pkg from '../package.json'
import {
  Email,
  ObjectId,
  UnauthorizedError,
  ForbiddenError,
  InvalidParameterError,
  BadRequestError,
  UnavailableError,
  UnknownError,
} from '.'

export interface EmailResponsePreviews {
  email: string
  preview: string
}

export interface EmailResponse {
  emails: ObjectId[]
  previews?: EmailResponsePreviews[]
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

  async send(email: Email): Promise<ObjectId[]> {
    return this.sendMany([email])
  }

  async sendMany(emails: Email[]): Promise<ObjectId[]> {
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

          if (emailResponse.previews) {
            for (const preview of emailResponse.previews) {
              console.log(
                `Templateless [TEST MODE]: Emailed ${preview.email}, preview: https://tmpl.sh/${preview.preview}`,
              )
            }
          }

          return emailResponse.emails
        default:
          throw new UnknownError()
      }
    } catch (error) {
      throw new UnknownError()
    }
  }
}
