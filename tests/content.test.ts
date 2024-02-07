import { Content } from '../src'

describe('Content', () => {
  it('should serialize to JSON correctly', () => {
    const content = Content.builder().text('Hello world').build()
    const expectedContent = JSON.stringify({
      version: 0,
      theme: 'UNSTYLED',
      header: [],
      body: [
        [
          {
            id: 'TEXT',
            text: 'Hello world',
          },
        ],
      ],
      footer: [],
    })

    expect(JSON.stringify(content)).toEqual(expectedContent)
  })
})
