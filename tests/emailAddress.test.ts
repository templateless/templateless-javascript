import { EmailAddress } from '../src'

describe('EmailAddress', () => {
  it('should serialize to JSON correctly with a name', () => {
    const email = new EmailAddress('john.doe@example.com', 'John Doe')
    const expectedJson = JSON.stringify({
      email: 'john.doe@example.com',
      name: 'John Doe',
    })

    expect(JSON.stringify(email)).toEqual(expectedJson)
  })

  it('should serialize to JSON correctly without a name', () => {
    const email = new EmailAddress('jane.doe@example.com')
    const expectedJson = JSON.stringify({
      email: 'jane.doe@example.com',
      name: null,
    })

    expect(JSON.stringify(email)).toEqual(expectedJson)
  })
})
