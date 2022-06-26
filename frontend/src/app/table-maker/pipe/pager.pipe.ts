import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pager'
})
export class PagerPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null, start: number, end: number): T[] | null {

    if (!Array.isArray(value) || !value.length || !start || !end) return value

    return value.filter((row, index) => index >= start - 1 && index <= end - 1)
  }


}
