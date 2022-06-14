import { Pipe, PipeTransform } from '@angular/core';

const name = 'spreadPipe'

@Pipe({
  name: `${name}`
})

export class SpreadPipe<T> implements PipeTransform {

  transform(value: T | null): T | null {

    // no object as value
    if (!value || typeof value !== 'object') return value

    const flatString = Object.values(value).flat(Infinity).join(', ')

    return flatString as unknown as T
  }
}
