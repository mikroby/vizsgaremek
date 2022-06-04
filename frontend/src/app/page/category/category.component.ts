import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  columns = this.config.categoryTableColumns

  list$ = this.categoryService.getAll()

  constructor(
    private config: ConfigService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
  }

}
