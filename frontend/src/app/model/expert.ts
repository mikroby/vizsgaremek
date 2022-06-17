export class Expert {
  [key: string]: any
  _id: string = ''
  first_name: string = ''
  last_name: string = ''
  job: number[] = []
  categoryID: number[] = []
  price: number = 0
  age?: number = 0
  gender?: string = 'Nő' || 'Féri'
  email: string = ''
  phone: string = ''  
  workDays: number[] = []
  availableFrom: string = ''
  availableTill: string = ''
  rating: number = 0
}
