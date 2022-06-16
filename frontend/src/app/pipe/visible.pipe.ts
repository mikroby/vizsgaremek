import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { ITableColumn } from '../table-maker/base-table/base-table.component';

@Pipe({
  name: 'visible'
})
export class VisiblePipe<T extends { [key: string]: any }> implements PipeTransform {

  constructor(private config: ConfigService) { }

  transform(value: T[] | null, coloumns: ITableColumn[]): T[] | null {

    if (!Array.isArray(value) || !value.length) return value

    // filter for displayedColumns only:
    const valueFiltered = value.map(row => {
      let newRow = {}
      coloumns.forEach(col => {
        newRow = { ...newRow, [col.key]: row[col.key] }
      })
      return newRow as T
    })

    return valueFiltered
  }

}
