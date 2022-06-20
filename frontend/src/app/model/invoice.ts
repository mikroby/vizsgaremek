export class Invoice {
  // [key: string]: any;
  _id: string = ''
  orderID: string = ''
  expert: string = ''
  customer: string = ''
  job: number = 0
  amount: number = 0
  status: string = 'várakozó' || 'fizetve'
}
