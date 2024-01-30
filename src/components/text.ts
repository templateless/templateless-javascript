import { ComponentId } from '../common'

export class Text implements Component {
  id: ComponentId
  text: string

  constructor(text: string) {
    this.id = ComponentId.Text
    this.text = text
  }
}

interface Component {}
