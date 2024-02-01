# Templateless JavaScript

[![npm version](https://img.shields.io/npm/v/templateless-js.svg)](https://www.npmjs.com/package/templateless-js)
[![Github Actions](https://img.shields.io/github/actions/workflow/status/templateless/templateless-javascript/tests.yml)](https://github.com/templateless/templateless-javascript/actions)
[![Downloads](https://img.shields.io/npm/dm/templateless-js)](https://www.npmjs.com/package/templateless-js)

## What is Templateless?

[Templateless](https://templateless.com) lets you generate and send transactional emails quickly and easily so you can ship faster 🚀

## ✨ Features

- 👋 **Anti drag-and-drop by design** — emails are a part of your code
- ✅ **Components as code** — function calls turn into email HTML components
- 💻 **SDK for any language** — use your favorite [programming language](https://github.com/orgs/templateless/repositories)
- 🔍 **Meticulously tested** — let us worry about email client compatibility
- 💌 **Use your favorite ESP** — Amazon SES, SendGrid, Mailgun + more
- 💪 **Email infrastructure** — rate-limiting, retries, scheduling + more
- ⚡ **Batch sending** — send 1 email or 1,000 with one API call

## 🚀 Getting started

Add to your project via yarn:

```bash
yarn add templateless-js
```

Or npm:

```bash
npm install --save templateless-js
```

## 👩‍💻 Quick example

This is all it takes to send a signup confirmation email:

```javascript
import { Content, Email, EmailAddress, Templateless } from 'templateless-js'

;(async () => {
  const content = Content
    .builder()
    .text('Hi, please **confirm your email**:')
    .button('Confirm Email', 'https://your-company.com/signup/confirm?token=XYZ')
    .build()

  const email = Email
    .builder()
    .to(new EmailAddress('<YOUR_CUSTOMERS_EMAIL_ADDRESS>'))
    .subject('Confirm your signup 👋')
    .content(content)
    .build()

  const templateless = new Templateless('<YOUR_API_KEY>')
  const result = await templateless.send(email)

  console.log(result)
})()
```

Note:

1. Get your **free API key** here: <https://app.templateless.com> ✨
1. There are more JavaScript examples in the [examples](examples) folder

## 🤝 Contributing

- Contributions are more than welcome <3
- Please **star this repo** for more visibility ★

## 📫 Get in touch

- For customer support feel free to email us at [github@templateless.com](mailto:github@templateless.com)

- Have suggestions or want to give feedback? Here's how to reach us:

    - For feature requests, please [start a discussion](https://github.com/templateless/templateless-javascript/discussions)
    - Found a bug? [Open an issue!](https://github.com/templateless/templateless-javascript/issues)
    - We are also on Twitter: [@Templateless](https://twitter.com/templateless)

## 🍻 License

[MIT](LICENSE)