import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { Expert } from 'src/app/model/expert';
import { CategoryService } from 'src/app/service/category.service';
import { ConfigService } from 'src/app/service/config.service';
import { ExpertService } from 'src/app/service/expert.service';
import { UserService } from 'src/app/service/user.service';
import { Category } from 'src/app/model/category';
import { IFileUploadResponse } from 'src/app/common/img-uploader/img-uploader.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | null = null

  expert: Expert | null = null

  experts!: Expert[]

  _id: string = ''

  categories$ = this.categoryService.getAll()

  editorIconSize = this.config.editorIconSize

  message: string = ''

  uploadedFilePath: string = '';

  avatar: string = ''
  pwd: string = ''
  lastName: string = ''
  firstName: string = ''
  email: string = ''

  weekDays = this.config.weekDays

  jobs: string[] = []
  selectedCategory: string = ''
  textarea: string = ''

  user$ = this.auth.user$

  constructor(
    private userService: UserService,
    private expertService: ExpertService,
    private categoryService: CategoryService,
    private config: ConfigService,
    private ar: ActivatedRoute,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      this._id = params['id']

      this.userService.getOne(this._id).subscribe(
        data => {
          this.storeStartData(data)

          this.expertService.getAll().subscribe(
            data => {
              const result = data.find((row: any) => row.user._id === this._id)

              if (result) {
                this.expert = result
                this.expert.category = result.category as Category
                this.jobs = this.expert.category.job
                this.selectedCategory = this.expert.category._id || ''

                this.textarea = this.expert.workDays.map(day => this.weekDays[day]).join(', ')
              } else {
                this.expert = new Expert()
              }

            })
        })
    })
  }

  onSubmit(expert: Expert, user: User): void {
    expert.user = user._id
    expert.workDays = this.textarea.split(',')
      .map(item => item.trim()).map(day => this.weekDays.indexOf(day))
    expert.category = this.selectedCategory

    if (this.uploadedFilePath) {
      user.avatar = this.uploadedFilePath;
    }

    if (this.avatar !== user.avatar || this.pwd !== user.password ||
      this.firstName !== user.firstName || this.lastName !== user.lastName
      || this.email !== user.email) {
      this.user$.next(user)
      if (this.pwd === user.password) {
        delete user.password
      }
      this.userService.update(user).subscribe()
    }

    if (this.expert?._id) {
      this.expertService.update(expert).subscribe(
        {
          next: () => this.message = 'Adatok rögzítve.',
          error: () => this.message = 'Hiba történt. Próbálja újra elküldeni!'
        })
    } else {
      delete expert._id
      this.expertService.create(expert).subscribe(
        {
          next: () => this.message = 'Adatok rögzítve.',
          error: () => this.message = 'Hiba történt. Próbálja újra elküldeni!'
        })
    }
  }

  onChangeCategory(): void {
    this.categoryService.getOne(this.selectedCategory).subscribe(
      category => this.jobs = category.job
    )
  }

  storeStartData(data: User): void {
    this.user = data
    this.avatar = data.avatar
    this.uploadedFilePath = this.avatar
    this.pwd = data.password || ''
    this.lastName = data.lastName
    this.firstName = data.firstName
    this.email = data.email
  }

  uploadSuccess(event: IFileUploadResponse): void {
    if (event.success) {
      this.uploadedFilePath = event.path
      return
    }
    this.message = 'Képfeltöltési hiba.'
  }

  getImageSrc(): string {
    return `${environment.apiUrl}avatar/${this.uploadedFilePath}`
  }

}
