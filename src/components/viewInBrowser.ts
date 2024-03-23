import { Component, ComponentId } from '../common'

export class ViewInBrowser implements Component {
  id: ComponentId
  text?: string

  constructor(text?: string) {
    this.id = ComponentId.ViewInBrowser
    this.text = text
  }
}
