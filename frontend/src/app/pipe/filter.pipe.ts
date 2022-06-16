import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null, phrase: string = '', key: string = ''): T[] | null {
    
    if (!Array.isArray(value) || !phrase) {
      return value
    }

    phrase = phrase.toLowerCase()

    // flattens: one-level embedded object and any-dimension arrays
    // no key.
    if (!key) {
      return value.filter(
        row => Object.values(row).map(data => typeof data !== 'object' ? data : Object.values(data))
          .flat(Infinity).join(' ').toLowerCase().includes(phrase)
      )
    }

    // has key. 
    return value.filter(row =>
      typeof row[key] !== 'object' ?
        String(row[key]).toLowerCase().includes(phrase) :
        Object.values(row[key]).flat(Infinity).join(' ').toLocaleLowerCase().includes(phrase)
    )

  }

}
