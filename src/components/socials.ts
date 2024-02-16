import { ComponentId } from '../common'

export enum Service {
  Website = 'WEBSITE',
  Email = 'EMAIL',
  Phone = 'PHONE',
  Facebook = 'FACEBOOK',
  YouTube = 'YOUTUBE',
  Twitter = 'TWITTER',
  X = 'X',
  GitHub = 'GITHUB',
  Instagram = 'INSTAGRAM',
  LinkedIn = 'LINKEDIN',
  Slack = 'SLACK',
  Discord = 'DISCORD',
  TikTok = 'TIKTOK',
  Snapchat = 'SNAPCHAT',
  Threads = 'THREADS',
  Telegram = 'TELEGRAM',
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
