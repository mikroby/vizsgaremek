import { Pipe, PipeTransform } from '@angular/core';

const name = 'currPipe'

@Pipe({
  name: `${name}`
})

export class CurrPipe<T> implements PipeTransform {

  transform(value: T | null, col: { pipe?: string }): T | null {

    if (!value) return value

    // no keys for pipe
    if (!col.pipe || col.pipe !== `${name}`) return value

    const currency = `${value} Ft`

    return currency as unknown as T
  }

}