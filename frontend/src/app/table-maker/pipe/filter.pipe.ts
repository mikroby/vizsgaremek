import { Pipe, PipeTransform } from '@angular/core'
import { ITableColumn } from '../base-table/base-table.component'

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null, phrase: string = '', key: string = '', columns: ITableColumn[]): T[] | null {

    if (!Array.isArray(value) || !phrase) {
      return value
    }

    phrase = phrase.toLowerCase()

    const visibleKeys = columns.filter(col => col.visible).map(col => col.key)

    // flattens: one-level embedded object and any-dimension arrays
    // no key.
    if (!key) {
      return value.filter(row => {
        const copy = { ...row }
        Object.keys(copy).forEach(key => {
          if (!visibleKeys.includes(key)) {
            delete copy[key]            
          }
        })

        return Object.values(copy).map(data => typeof data !== 'object' ? data : Object.values(data))
          .flat(Infinity).join(' ').toLowerCase().includes(phrase)
      })
    }

    // has key. 
    return value.filter(row =>
      typeof row[key] !== 'object' ?
        String(row[key]).toLowerCase().includes(phrase) :
        Object.values(row[key]).flat(Infinity).join(' ').toLocaleLowerCase().includes(phrase)
    )

  }

}
