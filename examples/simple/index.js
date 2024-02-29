import 'dotenv/config'
import { Content, Email, EmailAddress, Templateless } from 'templateless-js'

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

  const content = Content.builder().text('Hello world').build()

  const email = Email.builder()
    .to(new EmailAddress(email_address))
    .subject('Hello')
    .content(content)
    .build()

  const templateless = new Templateless(api_key)
  const result = await templateless.send(email)

  console.log(result)
}

sendEmail()
