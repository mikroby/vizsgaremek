import { Invoice } from './../../model/invoice';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  // list$ = this.invoiceService.getAll()
  list: Invoice[] | null = null

  constructor(
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.invoiceService.getAll().subscribe(
      data => this.list = data
    )
  }

  onRemove(_id: string): void {
    this.invoiceService.delete(_id).subscribe(
      () => this.getList()
    )
  }

}