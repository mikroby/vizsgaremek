import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expert } from '../model/expert';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ExpertService extends BaseService<Expert> {
 
  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'expert';
  }

}
