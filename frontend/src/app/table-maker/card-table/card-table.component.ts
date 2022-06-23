import { Component, Input, OnInit } from '@angular/core';
import { Triggers } from '@coreui/angular';
import { ICard } from 'src/app/table-maker/card/card.component';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {

  @Input() cardList: ICard[] | null = null
  @Input() listTitle: string = ''
  @Input() triggers: Triggers[] | Triggers = 'hover'

  constructor() { }

  ngOnInit(): void {
  }

}
