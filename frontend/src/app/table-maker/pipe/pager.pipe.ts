import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pager'
})
export class PagerPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null): T[] | null {
  
    // when slice pipe comes latest it would throw error without this mapping.
    return value
  }

}
