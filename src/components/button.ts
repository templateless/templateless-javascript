import { Component, ComponentId } from '../common'

export class Button implements Component {
  id: ComponentId
  text: string
  url: string

  constructor(text: string, url: string) {
    this.id = ComponentId.Button
    this.text = text
    this.url = url
  }
}
