import { Component, ComponentId } from '../common'

export enum Font {
  ReenieBeanie = 1,
  MeowScript = 2,
  Caveat = 3,
  Zeyada = 4,
  Petemoss = 5,
}

export class Signature implements Component {
  id: ComponentId
  text: string
  font?: Font

  constructor(text: string, font?: Font) {
    this.id = ComponentId.Signature
    this.text = text
    this.font = font
  }
}
