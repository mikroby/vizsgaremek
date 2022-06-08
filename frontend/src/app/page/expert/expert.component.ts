import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ExpertService } from 'src/app/service/expert.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {

  // columns = this.config.expertTableColumns

  list$ = this.expertService.getAll()

  constructor(
    // private config: ConfigService,
    private expertService: ExpertService,
  ) { }

  ngOnInit(): void {
  }

}