import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  // list$ = this.categoryService.getAll()
  list: Category[] | null = null

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.categoryService.getAll().subscribe(
      data => this.list = data
    )
  }

  onRemove(_id: string): void {
    this.categoryService.delete(_id).subscribe(
      () => this.getList()
    )
  }

}
