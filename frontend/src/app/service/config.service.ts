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

  defaultPageSize = 20
  minPageSize = 10
  defaultStartPage = 1
  defaultStep = 10

  roles=[
    {title:'látogató', value:1},
    {title:'szakember', value:2},
    {title:'admin', value:3},
  ]

  // possible values: sm | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl
  paginatorIconSize = 'xl'
  optionIconSize = 'sm'
  newIconSize = 'lg'
  displayToggleIconSize = 'lg'
  editorIconSize = 'lg'

  startDisplayWith = 'card'

  static sWeekDays = ['V', 'H', 'K', 'Sze', 'CS', 'P', 'Szo']

  get weekDays(): string[] {
    return ConfigService.sWeekDays;
  }

  categoryTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'name', title: 'Kategória neve', visible: true },
    { key: 'job', title: 'Munka neve', visible: true },
    { key: 'logo', title: 'Logo', visible: true },
  ]

  userTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'lastName', title: 'Vezetéknév', visible: true },
    { key: 'firstName', title: 'Keresztnév', visible: true },
    { key: 'email', title: 'E-mail', visible: true },
    { key: 'password', title: 'Jelszó', visible: false },
    { key: 'role', title: 'Jogosultság', visible: true },
    { key: 'avatar', title: 'Kép/logo', visible: true },
  ]

  expertTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'lastName', title: 'Vezetéknév', visible: true,
      projector: (row: any) => row.lastName = row.user?.lastName || '-'
    },
    { key: 'firstName', title: 'Keresztnév', visible: true,
      projector: (row: any) => row.firstName = row.user?.firstName || '-'
    },
    { key: 'job', title: 'Munka', visible: true, pipe: 'job' },
    { key: 'categoryName', title: 'Kategória', visible: true,
      projector: (row: any) => row.categoryName = row.category?.name || '-'
    },
    { key: 'price', title: 'Óradíj', visible: true, pipe: 'curr' },
    { key: 'age', title: 'Életkor', visible: true },
    { key: 'email', title: 'E-mail', visible: true,
      projector: (row: any) => row.email = row.user?.email || '-'
    },
    { key: 'phone', title: 'Telefon', visible: true },
    { key: 'workDays', title: 'Munkanapok', visible: true, pipe: 'day' },
    { key: 'availableFrom', title: 'Kezdés', visible: true },
    { key: 'availableTill', title: 'Befejezés', visible: true },
    { key: 'rating', title: 'Értékelés', visible: true },
  ]
  
  orderTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'date', title: 'Megrendelés dátuma', visible: true, pipe: 'customDate' },
    { key: 'expert', title: 'Szakember', visible: true },
    { key: 'job', title: 'Megrendelt munka', visible: true },
    { key: 'customer', title: 'Megrendelő neve', visible: true },
    { key: 'accepted', title: 'Elfogadott', visible: true },
  ]

  invoiceTableColumns: ITableColumn[] = [
    { key: '_id', title: '#', visible: false },
    { key: 'orderDate', title: 'Megrendelés', visible: true, pipe: 'customDate',
      projector: (row: any) => row.orderDate = row.order?.date || ''
    },
    { key: 'expert', title: 'Szakember', visible: true, 
      projector: (row: any) => row.expert = row.order?.expert || ''
    },
    { key: 'customer', title: 'Megrendelő', visible: true, 
      projector: (row: any) => row.customer = row.order?.customer || ''
    },
    { key: 'charge', title: 'Fizetendő', visible: true, pipe: 'curr' },
    { key: 'date', title: 'Teljesítés', visible: true, pipe: 'customDate' },
    { key: 'paid', title: 'Fizetve', visible: true },
  ]

  constructor(
  ) { }

}
