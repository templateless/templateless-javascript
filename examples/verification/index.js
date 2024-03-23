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

  const footer = Footer.builder()
    .text(
      'If you did not sign up for a MyCo account, please ignore this email.\nThis link will expire in 24 hours.',
    )
    .socials([
      new SocialItem(Service.Twitter, 'MyCo'),
      new SocialItem(Service.GitHub, 'MyCo'),
    ])
    .link('Unsubscribe', 'https://example.com')
    .build()

  const verifyEmailLink = 'https://example.com/verify?token=ABC'

  const content = Content.builder()
    .theme(Theme.Simple)
    .header(header)
    .text('Hi there,')
    .text(
      "Welcome to **MyCo**! We're excited to have you on board. Before we get started, we need to verify your email address.",
    )
    .text('Please confirm your email by clicking the button below:')
    .button('Verify Email', verifyEmailLink)
    .text('Or use the link below:')
    .link(verifyEmailLink, verifyEmailLink)
    .footer(footer)
    .build()

  const email = Email.builder()
    .to(new EmailAddress(emailAddress))
    .subject('Confirm your email')
    .content(content)
    .build()

  const templateless = new Templateless(apiKey)
  await templateless.send(email)
}

sendEmail()
