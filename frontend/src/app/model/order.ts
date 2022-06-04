export class Order {
  // [key: string]: any
  _id: string = ''
  customerID: string = ''
  expertID: string = ''
  job: number = 0
  amount: number = 0
  status: string = 'új' || 'elvégzett'
}
