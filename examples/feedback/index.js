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
    .socials([
      new SocialItem(Service.Twitter, 'MyCo'),
      new SocialItem(Service.GitHub, 'MyCo'),
    ])
    .build()

  const content = Content.builder()
    .theme(Theme.Simple)
    .header(header)
    .text('Hey Alex,')
    .text("I'm Jamie, founder of **MyCo**.")
    .text(
      'Could you spare a moment to reply to this email with your thoughts on our service? Your feedback is invaluable and directly influences our improvements.',
    )
    .text(
      'When you hit reply, your email will go directly to me, and I read each and every one.',
    )
    .text('Thanks for your support,')
    .signature('Jamie Parker')
    .text('Jamie Parker\n\nFounder @ [MyCo](https://example.com)')
    .footer(footer)
    .build()

  const email = Email.builder()
    .to(new EmailAddress(emailAddress))
    .subject('Thoughts on service?')
    .content(content)
    .build()

  const templateless = new Templateless(apiKey)
  await templateless.send(email)
}

sendEmail()
