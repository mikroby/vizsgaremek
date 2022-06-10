import { Component, Input, OnInit } from '@angular/core'
import { ConfigService } from 'src/app/service/config.service'

export interface ITableColumn {
  title: string
  key: string
  visible: boolean
}

export interface IAllowedButtons {
  edit: boolean
  delete: boolean
}

@Component({
  selector: 'base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent<T extends { [x: string]: any }> implements OnInit {

  @Input() list: T[] = []
  // @Input() columns: ITableColumn[] = []
  @Input() tableName: string = ''
  @Input() allowedButtons: IAllowedButtons = { edit: true, delete: true }

  columns: ITableColumn[] = []
  displayedColumns: ITableColumn[] = []
  filterKey: string = ''
  filterDisplay: string = ''
  phrase: string = ''
  sortBy: string = ''
  direction: number = 1

  optionIconSize: string = this.config.optionIconSize

  paginatorIconSize: string = this.config.paginatorIconSize
  pageSize: number = 0
  minPageSize = this.config.minPageSize
  actualPage = this.config.actualPage
  rowStart: number = 0
  rowEnd: number = 0

  refresh = true

  get pageList(): number[] {
    const allPage = Math.ceil(this.list.length / this.pageSize);
    return new Array(allPage).fill(1).map((item, index) => index + 1)
  }

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.getColumns()
    this.pageSize = this.config.pageSize > this.list.length ? this.list.length : this.config.pageSize
    this.calculateRows()
    this.sortBy=this.displayedColumns[0].key
  }

  jumpToPage(pageTo: number): void {
    this.actualPage = pageTo;
    this.calculateRows()
  }

  pageSizeChange(): void {
    this.actualPage = 1
    this.calculateRows()
  }

  calculateRows(): void {
    this.rowStart = this.pageSize * (this.actualPage - 1)
    this.rowEnd = this.rowStart + this.pageSize > this.list.length ?
      this.list.length : this.rowStart + this.pageSize
  }

  getColumns(): void {
    this.columns = [...this.config[this.tableName]]
    this.displayedColumns = this.columns.filter(col => col.visible)
  }

  changeVisibility(event: any): void {
    const checkbox = event.target
    const index = checkbox.value

    if (!checkbox.checked && this.displayedColumns.length === 1) {
      this.reload()
      return
    }

    this.config[this.tableName][index].visible = checkbox.checked ? true : false
    this.getColumns()
  }

  reload(): void {
    setTimeout(() => this.refresh = false)
    setTimeout(() => this.refresh = true)
  }

  toggleSortDirection(event: any): void {
    this.sortBy = event.target.id
    this.direction *= -1
  }

  
  // táblázat adatainak típusvizsgálata a záróprojekt material-ból:
  // isBoolean(value: any): boolean {
  //   return (typeof value === 'boolean');
  // }

  // isNestedObject(value: any): boolean {
  //   return (typeof value === 'object');
  // }


  // törlés gombhoz kell majd, a záróprojekt material-ból:
  // onRemove(id: number): void {
  //   const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
  //     data: {
  //       title: 'Megerősítés',
  //       message: 'Biztos vagy benne, hogy törölni szeretnéd?'
  //     }
  //   });
  //   confirmDialog.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.removeById.emit(id);
  //     }
  //   });
  // }

}
