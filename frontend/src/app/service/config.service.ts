import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  [x: string]: any

  // sidebarMenu: IMenuItem[] = [
  //   { link: '/', title: 'Dashboard', icon:'' },
  //   { link: '/expert', title: 'Experts', icon:'' },
  //   { link: '/category', title: 'Categories', icon:'' },
  // ]

  triggerHeader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  sideBarWidth_full = 256
  sideBarWidth_narrow = 64

  defaultPageSize = 50
  minPageSize = 5
  defaultStartPage = 1
  defaultStep = 5

  // values: sm | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl
  paginatorIconSize = 'xl'
  optionIconSize = 'sm'

  days = ['H', 'K', 'SZe', 'CS', 'P', 'SZo', 'V']

  categoryTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'categoryID', title: 'Kategória száma', visible: true },
    { key: 'name', title: 'Kategória neve', visible: true },
    { key: 'job', title: 'Munka neve', visible: true, pipe: { token: 'spreadPipe' } },
  ]

  customerTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'last_name', title: 'Vezetéknév', visible: true },
    { key: 'first_name', title: 'Keresztnév', visible: true },
    { key: 'email', title: 'E-mail', visible: true },
    { key: 'phone', title: 'Telefon', visible: true },
    { key: 'address', title: 'Lakcím', visible: true, pipe: { token: 'spreadPipe' } },
    { key: 'active', title: 'Aktív', visible: true },
  ]

  expertTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'last_name', title: 'Vezetéknév', visible: true },
    { key: 'first_name', title: 'Keresztnév', visible: true },
    { key: 'job', title: 'Munka', visible: true, pipe: { token: 'spreadPipe' } },
    { key: 'categoryID', title: 'Kategória száma', visible: true },
    { key: 'price', title: 'Óradíj', visible: true, pipe: { token: 'currency', args: ['Ft'] } },
    { key: 'age', title: 'Életkor', visible: true },
    { key: 'gender', title: 'Nem', visible: true },
    { key: 'email', title: 'E-mail', visible: true },
    { key: 'phone', title: 'Telefon', visible: true },
    { key: 'workDays', title: 'Munkanapok', visible: true, pipe: { token: 'dayPipe' } },
    { key: 'availableFrom', title: 'Kezdés', visible: true },
    { key: 'availableTill', title: 'Befejezés', visible: true },
    { key: 'rating', title: 'Értékelés', visible: true },
  ]

  invoiceTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'orderID', title: 'Rendelés száma', visible: true },
    { key: 'expertID', title: 'Mester Neve (ID)', visible: true },
    { key: 'categoryID', title: 'Kategória neve (ID)', visible: true },
    { key: 'job', title: 'Munka neve', visible: true, pipe: { token: 'spreadPipe' } },
    { key: 'amount', title: 'Rendelt mennyiség', visible: true },
    { key: 'status', title: 'Állapot', visible: true },
  ]

  orderTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'customerID', title: 'Megrendelő neve (ID)', visible: true },
    { key: 'expertID', title: 'Mester Neve (ID)', visible: true },
    { key: 'job', title: 'Munka neve', visible: true, pipe: { token: 'spreadPipe' } },
    { key: 'amount', title: 'Rendelt mennyiség', visible: true },
    { key: 'status', title: 'Állapot', visible: true },
  ]

  constructor() { }

}
