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
} from 'templateless-js'

const sendEmail = async () => {
  const api_key = process.env.TEMPLATELESS_API_KEY
  if (!api_key) {
    console.error('Set TEMPLATELESS_API_KEY to your Templateless API key')
    return
  }

  const email_address = process.env.TEMPLATELESS_EMAIL_ADDRESS
  if (!email_address) {
    console.error('Set TEMPLATELESS_EMAIL_ADDRESS to your own email address')
    return
  }

  const header = Header.builder().text('# ExampleApp').build()

  const footer = Footer.builder()
    .socials([
      new SocialItem(Service.Twitter, 'ExampleApp'),
      new SocialItem(Service.GitHub, 'ExampleApp'),
    ])
    .link('Unsubscribe', 'https://example.com/unsubscribe?id=123')
    .build()

  const content = Content.builder()
    .header(header)
    .text('Hello world')
    .footer(footer)
    .build()

  const email = Email.builder()
    .to(new EmailAddress(email_address))
    .subject('Confirm your email')
    .content(content)
    .build()

  const templateless = new Templateless(api_key)
  const result = await templateless.send(email)

  console.log(result)
}

sendEmail()
