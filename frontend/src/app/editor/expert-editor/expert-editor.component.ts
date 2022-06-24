import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { Expert } from 'src/app/model/expert';
import { ExpertService } from 'src/app/service/expert.service';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-expert-editor',
  templateUrl: './expert-editor.component.html',
  styleUrls: ['./expert-editor.component.scss']
})
export class ExpertEditorComponent implements OnInit {

  title: string = ''
  editorIconSize = this.configService.editorIconSize
  roles = this.configService.roles

  warning: boolean = false

  expert: Expert | null = null
  id: string = ''

  weekDays = this.configService.weekDays

  categories$ = this.categoryService.getAll()

  selectedCategory: string = ''

  jobs: string[] = []

  constructor(
    private expertService: ExpertService,
    private categoryService: CategoryService,
    private configService: ConfigService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      this.id = params['id']

      if (!this.id) {
        this.warning = true
        return
      }

      this.title = `${params['name']} szerkesztése`

      this.expertService.getOne(this.id)
        .subscribe(data => {
          this.expert = data
          
          this.expert.category = this.expert.category as Category
          this.selectedCategory = this.expert.category._id || ''
          this.jobs = this.expert.category.job

          this.expert.user = this.expert.user as User
          this.expert.firstName = this.expert.user.firstName
          this.expert.lastName = this.expert.user.lastName
          this.expert.email = this.expert.user.email
          this.expert.avatar = this.expert.user.avatar
        })
    })

  }

  onSubmit(expert: Expert): void {
  //  itt még átalakítások kellenek az expert objektumon mielőtt elküldjük
      this.expertService.update(expert).subscribe(() => history.back())
    
  }

  onCancel(): void {
    this.warning = false
    history.back()
  }

}
