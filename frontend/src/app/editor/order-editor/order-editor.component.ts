import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { ConfigService } from 'src/app/service/config.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.scss']
})
export class OrderEditorComponent implements OnInit {

  title: string = ''
  editorIconSize = this.config.editorIconSize
  roles = this.config.roles

  order: Order | null = null
  id: string = ''

  validator = this.config.validator

  constructor(
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
        this.orderService.getOne(this.id)
          .subscribe(data => {
            this.order = data
          })
      } else {
        this.order = new Order()
      }
    })

  }

  onSubmit(order: Order): void {
    if (this.id) {
      this.orderService.update(order).subscribe(() => history.back())
    } else {
      delete order._id
      this.orderService.create(order).subscribe(() => history.back())
    }

  }

  onCancel(): void {
    history.back()
  }

}
