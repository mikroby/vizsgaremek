export class User {
   [key: string]: any
  _id?: string = ''
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  avatar: string = 'default.png'
  password?: string = ''
  role: number = 2
}
