import { Address } from './address';

export class Customer {
  // [key: string]: any;
  _id: string = ''
  first_name: string = ''
  last_name: string = ''
  email: string = ''
  address: Address = new Address();
  active: boolean = true
}