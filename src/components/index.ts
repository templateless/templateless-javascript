import { Button } from './button'
import { Image } from './image'
import { Link } from './link'
import { Otp } from './otp'
import { Service, Item as SocialItem, Socials } from './socials'
import { Text } from './text'
import { ViewInBrowser } from './viewInBrowser'
import { StoreBadge, Item as StoreBadgeItem, StoreBadges } from './storeBadges'
import { QrCode } from './qrCode'
import { Signature, Font as SignatureFont } from './signature'

export { Button }
export { Image }
export { Link }
export { Otp }
export { Service, SocialItem, Socials }
export { Text }
export { ViewInBrowser }
export { StoreBadges, StoreBadgeItem, StoreBadge }
export { QrCode }
export { Signature, SignatureFont }

export type Component =
  | Button
  | Image
  | Link
  | Otp
  | Service
  | SocialItem
  | Socials
  | Text
  | ViewInBrowser
  | StoreBadges
  | QrCode
  | Signature
