import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  columns = this.config.customerTableColumns

  list$ = this.customerService.getAll()

  constructor(
    private config: ConfigService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
  }

}