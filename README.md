# EmailWrapper JavaScript

```javascript
import EmailWrapper from 'emailwrapper'

const { header, footer, wrapper, email } = new EmailWrapper('b901e158-05a2-4c59-b5d5-124bcdfce328')

const header = header
	.image('https://emailwrapper.com/img/logo.png')

const footer = footer
	.text(`You've signed up for EmailWrapper`)
	.socials({
		twitter: 'EmailWrapper',
		facebook: 'EmailWrapper',
	})

const welcome = wrapper
	.header(header)
	.text(`# Welcome to EmailWrapper!`)
	.text(`Thanks for signing up! **Please confirm your email:**`)
	.button('Confirm Email', 'https://emailwrapper.com/confirm-email')
	.footer(footer)

const result = await email
	.to('customer@example.com')
	.subject('Welcome!')
	.send(welcome)
```