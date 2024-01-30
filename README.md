# Templateless JavaScript

[![npm version](https://img.shields.io/npm/v/templateless-js.svg)](https://www.npmjs.com/package/templateless-js)
[![Github Actions](https://img.shields.io/github/actions/workflow/status/templateless/templateless-javascript/tests.yml)](https://github.com/templateless/templateless-javascript/actions)
[![Downloads](https://img.shields.io/npm/dm/templateless-js)](https://www.npmjs.com/package/templateless-js)

## What is this?

[Templateless](https://templateless.com) lets you quickly create and send emails with your favorite email provider without ever leaving your code editor.

Don't waste time messing around with HTML or HTML builders.

**Get your free API key [here](https://app.templateless.com).**

## Get Started

Install Templateless via Yarn:

```bash
yarn add templateless-js
```

Or npm:

```bash
npm install --save templateless-js
```

## Quick Example

```javascript
import { Content, Email, EmailAddress, Templateless } from 'templateless-js'

;(async () => {
  const content = Content.builder().text('Hello world').build()

  const email = Email.builder()
    .to(new EmailAddress('user@example.com'))
    .subject('Hello 👋')
    .content(content)
    .build()

  const templateless = new Templateless('<YOUR_API_KEY>')
  const result = await templateless.send(email)

  console.log('result', result)
})()
```

## License

[MIT](LICENSE)