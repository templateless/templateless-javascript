import 'dotenv/config'
import {
  Header,
  Footer,
  Content,
  Email,
  EmailAddress,
  Templateless,
  SocialItem,
  Service,
  Theme,
  StoreBadgeItem,
  StoreBadge,
} from 'templateless-js'

const sendEmail = async () => {
  const apiKey = process.env.TEMPLATELESS_API_KEY
  if (!apiKey) {
    console.error('Set TEMPLATELESS_API_KEY to your Templateless API key')
    return
  }

  const emailAddress = process.env.TEMPLATELESS_EMAIL_ADDRESS
  if (!emailAddress) {
    console.error('Set TEMPLATELESS_EMAIL_ADDRESS to your own email address')
    return
  }

  const header = Header.builder()
    .image('https://templateless.net/myco.webp', null, 100, null, 'MyCo')
    .build()

  const appStoreLink = 'https://apps.apple.com/us/app/example/id1234567890'
  const googlePlayLink =
    'https://play.google.com/store/apps/details?id=com.example'

  const footer = Footer.builder()
    .storeBadges([
      new StoreBadgeItem(StoreBadge.AppStore, appStoreLink),
      new StoreBadgeItem(StoreBadge.GooglePlay, googlePlayLink),
    ])
    .socials([
      new SocialItem(Service.Twitter, 'MyCo'),
      new SocialItem(Service.GitHub, 'MyCo'),
    ])
    .build()

  const content = Content.builder()
    .theme(Theme.Simple)
    .header(header)
    .text('Hey Alex,')
    .text(
      'Thank you for choosing MyCo! To get started with our mobile experience, simply pair your account with our mobile app.',
    )
    .text("Here's how to do it:")
    .text(
      [
        `1. Download the MyCo app from the [App Store](${appStoreLink}) or [Google Play](${googlePlayLink}).`,
        `1. Open the app and select _Pair Device_.`,
        `1. Scan the QR code below with your mobile device:`,
      ].join('\n'),
    )
    .qrCode('https://example.com/qr-code-link')
    .text('Enjoy your seamless experience across devices!')
    .footer(footer)
    .build()

  const email = Email.builder()
    .to(new EmailAddress(emailAddress))
    .subject('How to Pair Device')
    .content(content)
    .build()

  const templateless = new Templateless(apiKey)
  await templateless.send(email)
}

sendEmail()
