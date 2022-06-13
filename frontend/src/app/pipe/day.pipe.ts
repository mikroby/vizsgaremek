import { ConfigService } from 'src/app/service/config.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  public constructor(private config: ConfigService) { }

  transform(value: []): string {
    return value.map(item => this.config.days[item]).join(', ')
  }

}
