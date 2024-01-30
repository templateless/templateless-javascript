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
import { Result } from '.'

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

  build(): Result<Collection> {
    return new Collection(this)
  }

  private push(component: Component): this {
    this._components.push(component)
    return this
  }
}
