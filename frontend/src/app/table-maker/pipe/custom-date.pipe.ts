import { Pipe, PipeTransform } from '@angular/core';

const name = 'customDate'

@Pipe({
  name: `${name}`
})

export class CustomDatePipe<T> implements PipeTransform {
  transform(value: T | null, col: { pipe?: string }): any | null {

    if (!value || col.pipe !== `${name}`) return value

    const dateString = value as unknown as string

    return dateString.replace('-','.').replace('-','.')
  }

}
