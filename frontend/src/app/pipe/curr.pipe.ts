import { Pipe, PipeTransform } from '@angular/core';

const name = 'curr'

@Pipe({
  name: `${name}`
})

export class CurrPipe<T> implements PipeTransform {

  transform(value: T | null, col: { pipe?: string }): T | null {

    if (!value || col.pipe !== `${name}`) return value

    return `${value} Ft` as unknown as T
  }

}