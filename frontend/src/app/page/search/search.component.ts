import { ConfigService } from 'src/app/service/config.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExpertService } from 'src/app/service/expert.service';
import { Expert } from 'src/app/model/expert';
import { Observable, map } from 'rxjs';
import { ICard } from 'src/app/common/card/card.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  apiUrl: string = environment.apiUrl

  categoryID: number = 0

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
    // set invisible the unnecessary category column
    const index = this.config.expertTableColumns.findIndex(item => item.key === 'categoryID')
    this.config.expertTableColumns[index].visible = false

    this.ar.params.subscribe(params => {
      this.categoryID = Number(params['id'])

      this.listTitle =`Találatok - ${params['category']}`

      this.list$ = this.expertService.getAll()
        .pipe(map(experts => experts.filter(row => row.categoryID.includes(this.categoryID))))

      this.list$.subscribe(
        {
          next: response => {
            this.cardList = this.mapper(response)
          },
          error: error => {
            console.log(error);
          }
        }
      )
    })
  }

  // map from list to card datas
  mapper(response: Expert[]): ICard[] {
    return response.map(item => {
      const image = `${this.apiUrl}avatar/${item.avatar}`
      const description = [
        `${item.last_name} ${item.first_name}`,
        item.job,
        `${item.price} Ft/óra`,
        `tel: ${item.phone}`,
        `értékelés: ${item.rating}`
      ]
      const tooltip = false
      return { image, description, tooltip } as ICard
    })
  }

}

