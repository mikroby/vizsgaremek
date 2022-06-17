import { Component, Input, OnInit } from '@angular/core';

export interface ICard {
  image?: string
  title?: string
  description?: string[]
  link?: string
  btnText?: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: ICard

  constructor() { }

  ngOnInit(): void {
  }

}
