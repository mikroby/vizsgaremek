import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe<T extends { [key: string]: any }> implements PipeTransform {

  transform(value: T[] | null, sortBy: string = '', direction: number): T[] | null {

    if (!sortBy || !Array.isArray(value)) {
      return value
    }

    return value.sort((a, b) => {
      const aValue = a[sortBy]
      const bValue = b[sortBy]

      // number
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (aValue - bValue) * direction;
      }
      // object
      if (typeof aValue === 'object') {
        const aValuesString = Object.values(aValue).join('').toLowerCase()
        const bValuesString = Object.values(bValue).join('').toLowerCase()

        return (aValuesString.localeCompare(bValuesString)) * direction
      }
      // string
      return (String(aValue).toLowerCase().localeCompare(String(bValue)
        .toLowerCase())) * direction
    })
  }
}
