import { ConfigService } from 'src/app/service/config.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExpertService } from 'src/app/service/expert.service';
import { Expert } from 'src/app/model/expert';
import { Observable, map } from 'rxjs';
import { ICard } from 'src/app/table-maker/card/card.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  apiUrl: string = environment.apiUrl

  list$!: Observable<Expert[]>

  cardList: ICard[] | null = null

  listTitle: string = ''

  toggleIconSize = this.config.displayToggleIconSize

  display: string = this.config.startDisplayWith

  constructor(
    private expertService: ExpertService,
    private ar: ActivatedRoute,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    // sets visible:false to the unnecessary category column here
    const index = this.config.expertTableColumns.findIndex(item => item.key === 'categoryName')
    this.config.expertTableColumns[index].visible = false

    this.ar.params.subscribe(params => {
      this.listTitle = `Találatok - ${params['category']}`

      this.list$ = this.expertService.getAll().pipe(map(experts =>
        experts.filter(row => {
          if (typeof row.category === 'string') { return false }
          return row.category?.name === params['category']
        }
        )))

      this.list$.subscribe(
        response => {
          if (response.length) {
            this.cardList = this.mapper(response)
          } else this.cardList = null
        }
      )
    })
  }

  // map from list to ICard datas
  mapper(response: Expert[]): ICard[] | null {
    return response.map(row => {

      if (typeof row.user !== 'object') { return {} as ICard }

      const image = `${this.apiUrl}avatar/${row.user.avatar}`
      const description = [
        `${row.user.lastName} ${row.user.firstName}`,
        row.job.map((index: number) => {
          if (typeof row.category === 'object') row.category.job[index]
        }),
        `${row.price} Ft/óra`,
        `tel: ${row.phone}`,
        `értékelés: ${row.rating}`
      ]
      const tooltip = false
      return { image, description, tooltip } as ICard
    })
  }

}

