import { ActivatedRoute } from '@angular/router';
import { ICard } from './../../common/card/card.component';
import { CategoryService } from 'src/app/service/category.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {

  list: ICard[] | null = null

  apiUrl: string = environment.apiUrl

  listTitle: string = ''

  constructor(
    private categoryService: CategoryService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      {
        next: response => {
          this.list = this.mapper(response)
        },
        error: error => {
          console.log(error);
        }
      }
    )

    this.getRouteData()
  }

  getRouteData(): void {
    this.ar.data.subscribe(params => {
      this.listTitle = params['title']
    })
  }

  // map from list to card datas
  mapper(response: Category[]): ICard[] {
    return response.map(item => {
      const image = `${this.apiUrl}category/${item.logo}`
      const link = `/search/${item.categoryID}/${item.name}`
      const btnText = item.name
      const description = item.job
      const tooltip = true
      return { image, link, btnText, description, tooltip } as ICard
    })
  }

}
