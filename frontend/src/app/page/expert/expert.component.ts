import { Expert } from 'src/app/model/expert';
import { Component, OnInit } from '@angular/core';
import { ExpertService } from 'src/app/service/expert.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {

  list: Expert[] | null = null

  constructor(
    private expertService: ExpertService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.getList()
     // sets possibly invisible category column to visible
     const index = this.config.expertTableColumns.findIndex(item => item.key === 'categoryName')
     this.config.expertTableColumns[index].visible = true
  }

  getList(): void {
    this.expertService.getAll().subscribe(
      data => this.list = data
    )
  }

  onRemove(_id: string): void {
    this.expertService.delete(_id).subscribe(
      () => this.getList()
    )
  }

}