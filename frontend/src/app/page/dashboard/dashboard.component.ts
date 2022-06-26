import { forkJoin } from 'rxjs';
import { ExpertService } from './../../service/expert.service';
import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Expert } from 'src/app/model/expert';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data = {
    labels: [],
    datasets: [
      {
        label: 'Szakember',
        backgroundColor: [
          '#0d6efd', '#20c997', '#ffc107', '#6610f2'
        ],
        data: [],
        borderRadius: 3
      }
    ]
  }

  total: number = 0

  render: boolean = false

  constructor(
    private categoryService: CategoryService,
    private expertService: ExpertService
  ) { }

  ngOnInit(): void {
    forkJoin({
      categories: this.categoryService.getAll(),
      experts: this.expertService.getAll()
    }).subscribe(results => {

      const categories = results.categories
      const experts = results.experts as any

      this.total = experts.length

      const categoryNames = categories.map(item => item.name)

      this.data.labels = categoryNames as never[]

      this.data.datasets[0].data = categoryNames
        .map(name => experts
          .filter((expert: { category: { name: string; } }) =>
            expert.category.name === name).length) as never[]

      this.render = true
    })

  }

}



