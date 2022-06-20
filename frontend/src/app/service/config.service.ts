import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITableColumn } from '../table-maker/base-table/base-table.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  [x: string]: any

  triggerHeader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  sideBarWidth_full = '16rem'
  sideBarWidth_narrow = '4rem'

  defaultPageSize = 50
  minPageSize = 10
  defaultStartPage = 1
  defaultStep = 5

  // values: sm | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl
  paginatorIconSize = 'xl'
  optionIconSize = 'sm'
  newIconSize = 'lg'
  displayToggleIconSize = 'lg'

  startDisplayWith = 'card'

  weekDays = ['V', 'H', 'K', 'Sze', 'CS', 'P', 'Szo']

  categoryTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'categoryID', title: 'Kategória száma', visible: true },
    { key: 'name', title: 'Kategória neve', visible: true },
    { key: 'job', title: 'Munka neve', visible: true },
    { key: 'logo', title: 'Logo', visible: true },
  ]

  userTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'email', title: 'E-mail', visible: true },
    { key: 'lastName', title: 'Vezetéknév', visible: true },
    { key: 'firstName', title: 'Keresztnév', visible: true },
    { key: 'password', title: 'Jelszó', visible: false },
    { key: 'role', title: 'Szerep', visible: true },
    { key: 'avatar', title: 'Avatar', visible: true },
  ]

  expertTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'last_name', title: 'Vezetéknév', visible: true },
    { key: 'first_name', title: 'Keresztnév', visible: true },
    { key: 'job', title: 'Munka', visible: true },
    { key: 'categoryID', title: 'Kategória', visible: true },
    { key: 'price', title: 'Óradíj', visible: true, pipe: 'curr' },
    { key: 'age', title: 'Életkor', visible: true },
    { key: 'email', title: 'E-mail', visible: true },
    { key: 'phone', title: 'Telefon', visible: true },
    { key: 'workDays', title: 'Munkanapok', visible: true, pipe: 'day' },
    { key: 'availableFrom', title: 'Kezdés', visible: true },
    { key: 'availableTill', title: 'Befejezés', visible: true },
    { key: 'rating', title: 'Értékelés', visible: true },
  ]

  invoiceTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'orderID', title: 'Rendelés száma', visible: true },
    { key: 'expert', title: 'Mester', visible: true },
    { key: 'customer', title: 'Megrendelő', visible: true },
    { key: 'job', title: 'Munka', visible: true },
    { key: 'amount', title: 'Rendelt mennyiség', visible: true, pipe: 'curr' },
    { key: 'status', title: 'Állapot', visible: true },
  ]

  orderTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'customer', title: 'Megrendelő', visible: true },
    { key: 'expert', title: 'Mester', visible: true },
    { key: 'job', title: 'Munka', visible: true },
    { key: 'amount', title: 'Rendelt mennyiség', visible: true, pipe: 'curr' },
    { key: 'status', title: 'Állapot', visible: true },
  ]

  constructor() { }

}
