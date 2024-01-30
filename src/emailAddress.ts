export class EmailAddress {
  email: string
  name: string | null

  constructor(email: string, name?: string) {
    this.email = email
    this.name = name || null
  }
}
