import { Component, ComponentId } from '../common'

export class Otp implements Component {
  id: ComponentId
  text: string

  constructor(text: string) {
    this.id = ComponentId.Otp
    this.text = text
  }
}
