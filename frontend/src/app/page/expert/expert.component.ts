import { Expert } from 'src/app/model/expert';
import { Component, OnInit } from '@angular/core';
import { ExpertService } from 'src/app/service/expert.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {

  // list$ = this.expertService.getAll()
  list: Expert[] | null = null

  constructor(
    private expertService: ExpertService,
  ) { }

  ngOnInit(): void {
    this.getList()
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