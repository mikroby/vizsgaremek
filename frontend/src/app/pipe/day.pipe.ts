import { ConfigService } from 'src/app/service/config.service';
import { ITableColumn } from '../table-maker/base-table/base-table.component';
import { Pipe, PipeTransform } from '@angular/core';

const name = 'day'

@Pipe({
  name: `${name}`
})

export class DayPipe<T extends { [key: string]: any }> implements PipeTransform {

  constructor(private config: ConfigService) { }

  transform(value: T[] | null, coloumns: ITableColumn[]): T[] | null {

    if (!Array.isArray(value) || !value.length) return value

    const key = coloumns.find(col => col.pipe === `${name}`)?.key

    if (!key) return value

    return value.map(row => {
      const days = row[key].map((day: number) => this.config.days[day])
      return { ...row, [key]: days }
    })
  }

}
