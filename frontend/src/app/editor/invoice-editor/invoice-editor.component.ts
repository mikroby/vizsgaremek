import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/model/invoice';
import { Order } from 'src/app/model/order';
import { ConfigService } from 'src/app/service/config.service';
import { InvoiceService } from 'src/app/service/invoice.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-invoice-editor',
  templateUrl: './invoice-editor.component.html',
  styleUrls: ['./invoice-editor.component.scss']
})
export class InvoiceEditorComponent implements OnInit {

  title: string = ''
  editorIconSize = this.config.editorIconSize
  roles = this.config.roles

  invoice: Invoice | null = null
  id: string = ''

  orders$ = this.orderService.getAll()
  selectedOrder: string = ''

  validator = this.config.validator

  constructor(
    private invoiceService: InvoiceService,
    private orderService: OrderService,
    private config: ConfigService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      this.id = params['id']

      this.title = this.id ?
        `${params['name']} szerkesztése` : `Új ${params['name']} létrehozása`

      if (this.id) {
        this.invoiceService.getOne(this.id)
          .subscribe(data => {
            this.invoice = data

            this.invoice.order = this.invoice.order as Order
            this.invoice.orderDate= this.invoice.order.date
            this.invoice.expert= this.invoice.order.expert
            this.invoice.customer= this.invoice.order.customer
          })
      } else {
        this.invoice = new Invoice()
      }
    })
  }

  onSubmit(invoice: Invoice): void {
    if (this.id) {
      this.invoiceService.update(invoice).subscribe(() => history.back())
    } else {
      invoice.order = this.selectedOrder      
      delete invoice._id
      this.invoiceService.create(invoice).subscribe(() => history.back())
    }

  }

  onCancel(): void {
    history.back()
  }

}