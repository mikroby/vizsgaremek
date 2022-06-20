import { Component, Input, OnInit } from '@angular/core';
import { Triggers } from '@coreui/angular';

export interface ICard {
  image?: string
  title?: string
  description?: string[]
  link?: string
  btnText?: string
  tooltip: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: ICard
  @Input() triggers: Triggers[] | Triggers = 'hover'

  tooltip?: string


  constructor() { }

  ngOnInit(): void {
    this.tooltip = this.card.tooltip ? this.card.description?.join(', ') : ''
  }

}
