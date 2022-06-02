import { Injectable } from '@angular/core';

export interface IMenuItem {
  link: string
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  sidebarMenu: IMenuItem[] = [
    { link: '/', title: 'Dashboard' },
    { link: '/expert', title: 'Experts' },
    { link: '/category', title: 'Categories' },
  ]

  constructor() { }
}
