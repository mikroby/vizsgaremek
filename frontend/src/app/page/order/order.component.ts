import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  columns = this.config.orderTableColumns

  list$ = this.orderService.getAll()

  constructor(
    private config: ConfigService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
  }

}