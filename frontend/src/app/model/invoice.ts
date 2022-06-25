import { Order } from "./order"

export class Invoice {
  [key: string]: any;
  _id?: string = ''
  order?: Order | string = new Order()
  orderDate: string = ''
  expert: string = ''
  customer: string = ''
  charge: number = 0
  date: string = ''
  paid: boolean = false
}
