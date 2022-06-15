import { Component, OnInit } from '@angular/core';
import { ExpertService } from 'src/app/service/expert.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  list$ = this.expertService.getAll()

  constructor(
    private expertService: ExpertService,
  ) { }

  ngOnInit(): void {
  }

}
