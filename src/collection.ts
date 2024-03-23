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
  QrCode,
  StoreBadges,
  StoreBadgeItem,
  Signature,
  SignatureFont,
} from './components'

export class Collection {
  components: Component[]

  constructor(builder: CollectionBuilder) {
    this.components = builder._components
  }

  static builder(): CollectionBuilder {
    return new CollectionBuilder()
  }
}

class CollectionBuilder {
  _components: Component[]

  constructor() {
    this._components = []
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
    return this.push(new Image(src, alt, width, height, url))
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

  viewInBrowser(text?: string): this {
    return this.push(new ViewInBrowser(text))
  }

  qrCode(url: string): this {
    return this.push(QrCode.url(url))
  }

  storeBadges(data: StoreBadgeItem[]): this {
    return this.push(new StoreBadges(data))
  }

  signature(text: string, font?: SignatureFont): this {
    return this.push(new Signature(text, font))
  }

  component(c: Component): this {
    return this.push(c)
  }

  build(): Collection {
    return new Collection(this)
  }

  private push(component: Component): this {
    this._components.push(component)
    return this
  }
}
