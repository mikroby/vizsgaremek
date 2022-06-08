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

  pageSize = 50
  minPageSize = 4
  actualPage = 1

  // values: sm | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl
  paginatorIconSize = 'lg'
  optionIconSize = 'lg'

  categoryTableColumns: ITableColumn[] = [
    // { key: '_id', title: '#' },
    { key: 'categoryID', title: 'Kategória száma' },
    { key: 'name', title: 'Kategória neve' },
    { key: 'job', title: 'Munka neve' },
  ]

  customerTableColumns: ITableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'last_name', title: 'Vezetéknév' },
    { key: 'first_name', title: 'Keresztnév' },
    { key: 'email', title: 'E-mail' },
    { key: 'phone', title: 'Tel.' },
    { key: 'address', title: 'Lakcím' },
    { key: 'active', title: 'Aktív' },
  ]

  expertTableColumns: ITableColumn[] = [
    // { key: '_id', title: '#' },
    { key: 'last_name', title: 'Vezetéknév' },
    { key: 'first_name', title: 'Keresztnév' },
    { key: 'job', title: 'Munka' },
    { key: 'categoryID', title: 'Kategória száma' },
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

  invoiceTableColumns: ITableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'orderID', title: 'Rendelés száma' },
    { key: 'expertID', title: 'Mester Neve (ID)' },
    { key: 'categoryID', title: 'Kategória neve (ID)' },
    { key: 'job', title: 'Munka neve' },
    { key: 'amount', title: 'Rendelt mennyiség' },
    { key: 'status', title: 'Állapot' },
  ]

  orderTableColumns: ITableColumn[] = [
    { key: '_id', title: '#' },
    { key: 'customerID', title: 'Megrendelő neve (ID)' },
    { key: 'expertID', title: 'Mester Neve (ID)' },    
    { key: 'job', title: 'Munka neve' },
    { key: 'amount', title: 'Rendelt mennyiség' },
    { key: 'status', title: 'Állapot' },
  ]

  constructor() { }
}
