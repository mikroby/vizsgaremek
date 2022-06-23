import { Component, OnInit } from '@angular/core';
import { ExpertService } from 'src/app/service/expert.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {

  list$ = this.expertService.getAll()

  constructor(
    private expertService: ExpertService,
  ) { }

  ngOnInit(): void {
  }

}