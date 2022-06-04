import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseService<Invoice> {

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'invoice';
  }

}