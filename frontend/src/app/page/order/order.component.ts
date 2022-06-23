import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  list$ = this.orderService.getAll()

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
  }

}