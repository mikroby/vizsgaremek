export class Order {
  // [key: string]: any
  _id: string = ''
  customer: string = ''
  expert: string = ''
  job: number = 0
  amount: number = 0
  status: string = 'várakozó' || 'elvégzett'
}
