import { ActivatedRoute } from '@angular/router';
import { ICard } from './../../common/card/card.component';
import { CategoryService } from 'src/app/service/category.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {

  list!: ICard[]

  apiUrl: string = environment.apiUrl

  listTitle: string = ''

  constructor(
    private categoryService: CategoryService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      {
        next: (res) => {
          this.list = res.map(item => {
            const image = `${this.apiUrl}category/${item.logo}`
            const link = `/search/${item.categoryID}`
            const btnText = item.name
            // const title = item.name
            // const link = '/search'
            // const description = item.job
            return { image, link, btnText } as ICard
            // return { image, title, description, link, btnText } as ICard
          })
        },
        error: (error) => {
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

}
