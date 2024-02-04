import {
  Component,
  Button,
  Image,
  Link,
  Otp,
  Socials,
  Text,
  ViewInBrowser,
  SocialItem,
} from './components'
import { Header, Footer } from '.'

export enum Theme {
  Unstyled = 'UNSTYLED',
  Simple = 'SIMPLE',
}

export class Content {
  version: number
  theme: Theme
  header: Component[]
  body: Component[][]
  footer: Component[]

  constructor(builder: ContentBuilder) {
    this.version = 0
    this.theme = builder._theme
    this.header = builder._header
    this.body = builder._body
    this.footer = builder._footer
  }

  static builder(): ContentBuilder {
    return new ContentBuilder()
  }
}

class ContentBuilder {
  _theme: Theme
  _header: Component[]
  _body: Component[][]
  _footer: Component[]

  constructor() {
    this._theme = Theme.Unstyled
    this._header = []
    this._body = [[]]
    this._footer = []
  }

  theme(theme: Theme): this {
    this._theme = theme
    return this
  }

  header(header: Header): this {
    this._header = header.components
    return this
  }

  footer(footer: Footer): this {
    this._footer = footer.components
    return this
  }

  button(text: string, url: string): this {
    return this.push(new Button(text, url))
  }

  image(
    src: string,
    url?: string,
    width?: number,
    height?: number,
    alt?: string,
  ): this {
    return this.push(
      new Image(src, alt ?? '', width ?? 0, height ?? 0, url ?? ''),
    )
  }

  link(text: string, url: string): this {
    return this.push(new Link(text, url))
  }

  otp(text: string): this {
    return this.push(new Otp(text))
  }

  socials(data: SocialItem[]): this {
    return this.push(new Socials(data))
  }

  text(text: string): this {
    return this.push(new Text(text))
  }

  viewInBrowser(text: string): this {
    return this.push(new ViewInBrowser(text))
  }

  build(): Content {
    return new Content(this)
  }

  private push(component: Component): this {
    if (this._body[0] !== undefined) {
      this._body[0].push(component)
    }

    return this
  }
}
