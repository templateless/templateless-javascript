import { Component, ComponentId } from '../common'

export enum Font {
  ReenieBeanie = 'REENIE_BEANIE',
  MeowScript = 'MEOW_SCRIPT',
  Caveat = 'CAVEAT',
  Zeyada = 'ZEYADA',
  Petemoss = 'PETEMOSS',
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
