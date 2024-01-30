import { ComponentId } from '../common'

export class Link implements Component {
  id: ComponentId
  text: string
  url: string

  constructor(text: string, url: string) {
    this.id = ComponentId.Link
    this.text = text
    this.url = url
  }
}

interface Component {}
