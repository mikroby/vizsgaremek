import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  list$ = this.invoiceService.getAll()

  constructor(
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit(): void {
  }

}