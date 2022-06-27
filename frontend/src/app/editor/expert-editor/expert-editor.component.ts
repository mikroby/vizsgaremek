import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { Expert } from 'src/app/model/expert';
import { ExpertService } from 'src/app/service/expert.service';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-expert-editor',
  templateUrl: './expert-editor.component.html',
  styleUrls: ['./expert-editor.component.scss']
})
export class ExpertEditorComponent implements OnInit {

  title: string = ''
  editorIconSize = this.config.editorIconSize
  roles = this.config.roles

  warning: boolean = false

  weekDays = this.config.weekDays

  freeUsers: User[] = []
  expert!: Expert
  expertID: string | null = null
  selectedUser: string = ''

  renderForm: boolean = false

  categories$ = this.categoryService.getAll()
  jobs: string[] = []
  selectedCategory: string = ''
  textarea: string = ''

  validator = this.config.validator

  constructor(
    private userService: UserService,
    private expertService: ExpertService,
    private categoryService: CategoryService,
    private config: ConfigService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      this.expertID = params['id']

      if (!this.expertID) {
        this.getFreeUsers(params['name'])
      } else {
        this.title = `${params['name']} szerkesztése`
        this.expertService.getOne(this.expertID)
          .subscribe(data => this.getData(data))
      }
    })

  }

  onSubmit(expert: Expert): void {
    expert.category = this.selectedCategory
    expert.user = this.selectedUser
    expert.workDays = this.textarea.split(',')
      .map(item => item.trim()).map(item => item.charAt(0).toUpperCase() + item.slice(1))
      .map(day => this.weekDays.indexOf(day))

    if (this.expertID) {

      this.expertService.update(expert).subscribe(() => history.back())
    } else {
      delete expert._id
      this.expertService.create(expert).subscribe(() => history.back())
    }
  }

  onCancel(): void {
    this.warning = false
    history.back()
  }

  onChangeCategory(): void {
    this.categoryService.getOne(this.selectedCategory).subscribe(
      category => this.jobs = category.job
    )
  }

  onChangeUser(): void {
    this.userService.getOne(this.selectedUser).subscribe(
      data => this.getNewUser(data)
    )
  }

  getData(data: Expert): void {
    this.expert = data

    this.expert.category = data.category as Category
    this.selectedCategory = this.expert.category._id || ''
    this.jobs = this.expert.category.job

    this.expert.user = data.user as User
    this.expert.firstName = this.expert.user.firstName
    this.expert.lastName = this.expert.user.lastName
    this.expert.email = this.expert.user.email
    this.expert.avatar = this.expert.user.avatar

    this.selectedUser = this.expert.user._id || ''

    this.textarea = this.expert.workDays.map(day => this.weekDays[day]).join(', ')

    this.renderForm = true
  }

  getNewUser(data: User): void {
    this.expert.user = data
    this.expert.firstName = data.firstName
    this.expert.lastName = this.expert.user.lastName
    this.expert.email = this.expert.user.email
  }

  getFreeUsers(name: string): void {
    forkJoin({
      users: this.userService.getAll(),
      experts: this.expertService.getAll()
    }).subscribe(results => {

      const reggedUsers = results.users
      const experts = results.experts
      const joinedIDs = experts.map((expert: any) => expert.user._id)
      this.freeUsers = reggedUsers
        .filter((user: any) => user.role === 2 && !joinedIDs.includes(user._id))

      if (!this.freeUsers.length) {
        this.warning = true
        return
      }

      this.title = `Új ${name} létrehozása`
      this.expert = new Expert()
      this.renderForm = true
      return
    })
  }

}
