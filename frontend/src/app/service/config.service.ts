import { Injectable } from '@angular/core';
import { ITableColumn } from '../table-maker/base-table/base-table.component';

// export interface IMenuItem {
//   link: string
//   title: string
//   icon?: string
// }

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // sidebarMenu: IMenuItem[] = [
  //   { link: '/', title: 'Dashboard', icon:'' },
  //   { link: '/expert', title: 'Experts', icon:'' },
  //   { link: '/category', title: 'Categories', icon:'' },
  // ]

  pageSize = 4
  actualPage = 1

  categoryTableColumns: ITableColumn[] = [
    // { key: '_id', title: '#' },
    { key: 'categoryId', title: 'Kategória száma' },
    { key: 'name', title: 'Kategória neve' },
    { key: 'job', title: 'Munka neve' },
  ]

  expertTableColumns: ITableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'first_name', title: 'Keresztnév' },
    { key: 'last_name', title: 'Vezetéknév' },
    { key: 'job', title: 'Munka' },
    { key: 'categoryId', title: 'Kategória száma' },
    { key: 'price', title: 'Ár' },
    { key: 'age', title: 'Életkor' },
    { key: 'gender', title: 'Nem' },
    { key: 'email', title: 'E-mail' },
    { key: 'phone', title: 'Tel.' },
    { key: 'workDays', title: 'Munkanapok' },
    { key: 'availableFrom', title: 'Kezd' },
    { key: 'availableTill', title: 'Végez' },
    { key: 'rating', title: 'Pontszám' },
  ]

  constructor() { }
}
