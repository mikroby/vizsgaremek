import { Pipe, PipeTransform } from '@angular/core';
import { ITableColumn } from '../base-table/base-table.component';

const name = 'job'

@Pipe({
  name: `${name}`
})

export class JobPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null, columns: ITableColumn[]): T[] | null {

    if (!Array.isArray(value) || !value.length) return value

    const key = columns.find(col => col.pipe === `${name}`)?.key

    if (!key) return value

    return value.map(row => {
      const jobs = row[key].map((index: number) => row['category'].job[index])
      return { ...row, [key]: jobs }
    })
  }

}