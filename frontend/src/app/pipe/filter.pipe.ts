import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null, phrase: string = '', key: string = ''): T[] | null {

    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();

    if (!key && !value[0]['address']) {
      return value.filter(
        item => Object.values(item).join(' ').toLowerCase().includes(phrase)
      );
    }

    if (!key && value[0]['address']) {
      return value.filter(
        item => (Object.values(item) + ' ' + (Object.values(item['address'])).join(' ')).toLowerCase().includes(phrase)
      );
    }

    if (key === 'address') {
      return value.filter(
        item => ((Object.values(item['address'])).join(' ').toLowerCase().includes(phrase)
        ));
    }

    return value.filter(item => {
      const data = String(item[key]).toLowerCase();
      return data.includes(phrase);
    });
  }

}
