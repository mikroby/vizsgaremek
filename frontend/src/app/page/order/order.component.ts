import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  // list$ = this.orderService.getAll()
  list: Order[] | null = null

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.orderService.getAll().subscribe(
      data => this.list = data
    )
  }

  onRemove(_id: string): void {
    this.orderService.delete(_id).subscribe(
      () => this.getList()
    )
  }

}