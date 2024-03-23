import base64 from 'base64-js'
import { Component, ComponentId } from '../common'

export enum Cryptocurrency {
  Bitcoin = 'bitcoin',
  Ethereum = 'ethereum',
}

export class QrCode implements Component {
  id: ComponentId
  data: string

  constructor(data: Uint8Array) {
    this.id = ComponentId.QrCode
    this.data = base64.fromByteArray(data)
  }

  static email(email: string): QrCode {
    return new this(new TextEncoder().encode(`mailto:${email}`))
  }

  static url(url: string): QrCode {
    return new this(new TextEncoder().encode(url))
  }

  static phone(phone: string): QrCode {
    return new this(new TextEncoder().encode(`tel:${phone}`))
  }

  static sms(text: string): QrCode {
    return new this(new TextEncoder().encode(`smsto:${text}`))
  }

  static coordinates(lat: number, lng: number): QrCode {
    return new this(new TextEncoder().encode(`geo:${lat},${lng}`))
  }

  static cryptocurrencyAddress(
    cryptocurrency: Cryptocurrency,
    address: string,
  ): QrCode {
    return new this(new TextEncoder().encode(`${cryptocurrency}:${address}`))
  }
}
