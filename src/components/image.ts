import { Component, ComponentId } from '../common'

export class Image implements Component {
  id: ComponentId
  src: string
  alt?: string
  width?: number
  height?: number
  url?: string

  constructor(
    src: string,
    alt?: string,
    width?: number,
    height?: number,
    url?: string,
  ) {
    this.id = ComponentId.Image
    this.src = src
    this.alt = alt
    this.width = width
    this.height = height
    this.url = url
  }
}
