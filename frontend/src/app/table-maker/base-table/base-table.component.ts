import { Component, Input, OnInit } from '@angular/core'
import { ConfigService } from 'src/app/service/config.service'

export interface ITableColumn {
  title: string
  key: string
}

export interface IOptionButtons {
  editBtn: boolean
  deleteBtn: boolean
}

@Component({
  selector: 'base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent<T extends { [x: string]: any }> implements OnInit {

  @Input() list: T[] = []
  @Input() columns: ITableColumn[] = []
  @Input() buttons: IOptionButtons = { editBtn: true, deleteBtn: true }


  paginatorIconSize: string = this.config.paginatorIconSize
  optionIconSize:string = this.config.optionIconSize
  pageSize = this.config.pageSize
  // pageSize = this.config.pageSize > this.list.length ? this.list.length : this.config.pageSize
  minPageSize = this.config.minPageSize
  actualPage = this.config.actualPage
  rowStart!: number
  rowEnd!: number

  get pageList(): number[] {
    const allPage = Math.ceil(this.list.length / this.pageSize);
    return new Array(allPage).fill(1).map((item, index) => index + 1)
  }

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.rowStart = this.pageSize * (this.actualPage - 1)
    this.rowEnd = this.rowStart + this.pageSize > this.list.length ?
      this.list.length : this.rowStart + this.pageSize
  }

  jumpToPage(pageTo: number): void {
    this.actualPage = pageTo;
    this.ngOnInit()
  }

  onChange(): void {
    this.actualPage = 1
    // this.pageSize = this.pageSize > this.list.length ?
    //   this.list.length : this.pageSize
    this.ngOnInit()
  }
}
