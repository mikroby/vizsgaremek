import { Injector, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicPipe'
})
export class DynamicPipe implements PipeTransform {

  public constructor(
    private injector: Injector
  ) { }

  transform(value: any, pipe: any): any {
    const { token, args } = pipe
    if (!token) {
      return value;
    }

    const pipeName = this.injector.get(token);
    return pipeName.transform(value, ...args);
  }
}