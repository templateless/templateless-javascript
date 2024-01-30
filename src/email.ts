import { EmailAddress, Result } from '.'

interface EmailOptions {
  deleteAfter?: number
}

class Content {
  static builder(): Content {
    return new Content()
  }
}

export class Email {
  to: EmailAddress[]
  subject: string
  content: Content
  options: EmailOptions

  constructor(builder: EmailBuilder) {
    this.to = Array.from(builder._to)
    this.subject = builder._subject
    this.content = builder._content
    this.options = builder._options
  }

  static builder(): EmailBuilder {
    return new EmailBuilder()
  }
}

class EmailBuilder {
  _to: Set<EmailAddress>
  _subject: string
  _content: Content
  _options: EmailOptions

  constructor() {
    this._to = new Set<EmailAddress>()
    this._subject = ''
    this._content = Content.builder()
    this._options = {}
  }

  to(emailAddress: EmailAddress): this {
    this._to.add(emailAddress)
    return this
  }

  toMany(emailAddresses: EmailAddress[]): this {
    emailAddresses.forEach((emailAddress) => this._to.add(emailAddress))
    return this
  }

  subject(subject: string): this {
    this._subject = subject
    return this
  }

  content(content: Content): this {
    this._content = content
    return this
  }

  deleteAfter(seconds: number): this {
    this._options.deleteAfter = seconds
    return this
  }

  build(): Result<Email> {
    return new Email(this)
  }
}
