import 'dotenv/config'
import { Content, Email, EmailAddress, Templateless } from 'templateless-js'

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

  const email = Email.builder()
    .to(new EmailAddress(emailAddress))
    .subject('Hello 👋')
    .content(Content.builder().text('Hello world').build())
    .build()

  const templateless = new Templateless(apiKey)
  await templateless.send(email)
}

sendEmail()
