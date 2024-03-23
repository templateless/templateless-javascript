import { Component, ComponentId } from '../common'

export enum StoreBadge {
  AppStore = 'APP_STORE',
  GooglePlay = 'GOOGLE_PLAY',
  MicrosoftStore = 'MICROSOFT_STORE',
}

export class Item {
  key: StoreBadge
  value: string

  constructor(key: StoreBadge, value: string) {
    this.key = key
    this.value = value
  }
}

export class StoreBadges implements Component {
  id: ComponentId
  data: Item[]

  constructor(data: Item[]) {
    this.id = ComponentId.StoreBadges
    this.data = data
  }
}
