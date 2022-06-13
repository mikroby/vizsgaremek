import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spread'
})
export class SpreadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
