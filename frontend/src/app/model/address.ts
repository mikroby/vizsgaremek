export class Address {
  // [key: string]: any
  zip: string = ''
  country: string = ''
  city: string = ''
  street: string = ''
  notes?: string = ''

  get full(): string {
    return [
      this.zip,
      this.country,
      this.city,
      this.street,
      this.notes
    ].join(' ')
  }
}
