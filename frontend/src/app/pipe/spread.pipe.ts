import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spreadPipe'
})

export class SpreadPipe implements PipeTransform {

  transform(value: {} | []): string {
    return Object.values(value)
      .map(item => typeof item === 'object' ? Object.values(item).flat(Infinity).join(', ') : item)
      .join(', ')
  }
}
