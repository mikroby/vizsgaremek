import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null, phrase: string = '', key: string = ''): T[] | null {

    // no array or no phrase to filter by
    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();

    // no key with one-level embedded object and any-level arrays
    if (!key) {
      return value.filter(
        item => Object.values(item).map(item => typeof item === 'object' ? Object.values(item) : item)
          .flat(Infinity).join(' ').toLowerCase().includes(phrase)
      );
    }

    // key presents
    return value.filter(item =>
      typeof item[key] !== 'object' ?
        String(item[key]).toLowerCase().includes(phrase) :
        Object.values(item[key]).flat(Infinity).join(' ').toLocaleLowerCase().includes(phrase)
    )

  }

}
