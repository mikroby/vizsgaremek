import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service'

export interface ITableColumn {
  key: string
  title: string
  visible: boolean
  pipe?: string
  projector?: Function
}

export interface IAllowedButtons {
  edit: boolean
  delete: boolean
  new: boolean
}

@Component({
  selector: 'base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent<T extends { [x: string]: any }> implements OnInit {

  @Input() list: T[] = []
  @Input() tableName: string = ''
  @Input() allowedButtons: IAllowedButtons = { edit: true, delete: true, new: true }

  @Output() removeById: EventEmitter<string> = new EventEmitter();

  tableTitle: string = ''
  columns: ITableColumn[] = []
  displayedColumns: ITableColumn[] = []
  filterKey: string = ''
  filterDisplay: string = ''
  phrase: string = ''
  sortBy: string = ''
  direction: number = 1

  optionIconSize: string = this.config.optionIconSize
  newIconSize: string = this.config.newIconSize

  paginatorIconSize: string = this.config.paginatorIconSize
  pageSize: number = 0
  minPageSize = this.config.minPageSize
  actualPage = this.config.defaultStartPage
  step = this.config.defaultStep
  rowStart: number = 0
  rowEnd: number = 0

  refresh = true

  get pageList(): number[] {
    const allPage = Math.ceil(this.list.length / this.pageSize);
    return new Array(allPage).fill(1).map((item, index) => index + 1)
  }

  constructor(
    private config: ConfigService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getRouteData()
    this.getColumns()
    this.pageSize = this.config.defaultPageSize > this.list.length ?
      this.list.length : this.config.defaultPageSize
    this.calculateRows()
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
    this.columns = [...this.config[`${this.tableName}TableColumns`]]
    this.displayedColumns = this.columns.filter(col => col.visible)
  }

  changeVisibility(event: any): void {
    const checkbox = event.target
    const index = checkbox.value

    // ensures that one box must be checked to show some data!
    if (!checkbox.checked && this.displayedColumns.length === 1) {
      this.reload()
      return
    }

    this.config[`${this.tableName}TableColumns`][index]
      .visible = checkbox.checked ? true : false
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

  getRouteData(): void {
    this.ar.data.subscribe(params => {
      this.tableTitle = params['title']
    })
    this.ar.params.subscribe(
      params => {
        this.tableTitle += params['category'] ? ` - ${params['category']}` : ''
      }
    )
  }

  // data boolean type-check for nicer display
  isBoolean(value: any): boolean {
    return (typeof value === 'boolean');
  }

  onRemove(_id: string): void {
    if (!confirm('Biztosan törölni szeretné?')) return
    this.removeById.emit(_id)
  }
 
}
