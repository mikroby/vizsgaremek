import { Category } from "./category"
import { User } from "./user"

export class Expert {
  [key: string]: any
  _id?: string = ''
  firstName: string = ''
  lastName: string = ''
  job: number[] = []
  category?: Category | string = new Category()
  categoryName: string = ''
  price: number = 0
  age?: number = 0
  email: string = ''
  phone: string = ''
  workDays: number[] = []
  availableFrom: string = ''
  availableTill: string = ''
  rating: number = 0
  avatar: string = ''
  user?: User | string = new User()
}
