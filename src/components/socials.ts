import { ComponentId } from '../common'

export enum Service {
  Website = 'WEBSITE',
  Email = 'EMAIL',
  Twitter = 'TWITTER',
  X = 'X',
  Github = 'GITHUB',
}

export class Item {
  service: Service
  value: string

  constructor(service: Service, value: string) {
    this.service = service
    this.value = value
  }
}

export class Socials implements Component {
  id: ComponentId
  data: Item[]

  constructor(data: Item[]) {
    this.id = ComponentId.Socials
    this.data = data
  }
}

interface Component {}
