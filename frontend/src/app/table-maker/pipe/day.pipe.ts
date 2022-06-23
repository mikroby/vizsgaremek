import { ConfigService } from 'src/app/service/config.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ITableColumn } from '../base-table/base-table.component';

const name = 'day'

@Pipe({
  name: `${name}`
})

export class DayPipe<T extends { [key: string]: any }> implements PipeTransform {

  constructor(private config: ConfigService) { }

  transform(value: T[] | null, columns: ITableColumn[]): T[] | null {

    if (!Array.isArray(value) || !value.length) return value

    const key = columns.find(col => col.pipe === `${name}`)?.key

    if (!key) return value

    return value.map(row => {
      const days = row[key].map((day: number) => this.config.weekDays[day])
      return { ...row, [key]: days }
    })
  }

}
