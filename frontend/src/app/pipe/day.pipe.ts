import { ConfigService } from 'src/app/service/config.service';
import { ITableColumn } from '../table-maker/base-table/base-table.component';
import { Pipe, PipeTransform } from '@angular/core';

const name = 'dayPipe'

@Pipe({
  name: `${name}`
})

export class DayPipe<T extends { [key: string]: any }> implements PipeTransform {

  constructor(private config: ConfigService) { }

  transform(value: T[] | null, coloumns: ITableColumn[]): T[] | null {

    if (!Array.isArray(value) || !value || !value.length) return value

    const key = coloumns.find(col => col.pipe === `${name}`)?.key

    // no keys for dayPipe
    if (!key) return value

    return value.map(item => {
      const days = item[key].map((day: number) => this.config.days[day])
      return { ...item, [key]: days }
    })
  }

}
