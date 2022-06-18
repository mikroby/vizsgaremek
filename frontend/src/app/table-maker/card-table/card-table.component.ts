import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/common/card/card.component';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {

  @Input() cardList: ICard[] | null = null
  @Input() listTitle: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
