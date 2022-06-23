import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  list$ = this.categoryService.getAll()

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
  }

}
