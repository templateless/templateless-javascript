import { Button } from './button'
import { Image } from './image'
import { Link } from './link'
import { Otp } from './otp'
import { Service, Item as SocialItem, Socials } from './socials'
import { Text } from './text'
import { ViewInBrowser } from './viewInBrowser'

export { Button }
export { Image }
export { Link }
export { Otp }
export { Service, SocialItem, Socials }
export { Text }
export { ViewInBrowser }

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
