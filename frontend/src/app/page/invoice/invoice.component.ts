import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  columns = this.config.invoiceTableColumns

  list$ = this.invoiceService.getAll()

  constructor(
    private config: ConfigService,
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit(): void {
  }

}