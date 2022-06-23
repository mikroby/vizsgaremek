import { Pipe, PipeTransform } from '@angular/core';
import { ITableColumn } from '../base-table/base-table.component';

@Pipe({
  name: 'project'
})
export class ProjectPipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(value: T[] | null, columns: ITableColumn[]): T[] | null {

    if (!Array.isArray(value) || !value.length) return value

    const colsWithProjector = columns.filter(col => col.projector)

    if (!colsWithProjector.length) return value

    return value.map(row => {
      colsWithProjector.forEach(col => {
        if (col.projector) col.projector(row)
      })
      return row
    })
  }

}
