import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  title: string = ''
  editorIconSize = this.configService.editorIconSize
  roles = this.configService.roles

  user: User | null = null
  id: string = ''

  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      this.id = params['id']
      this.title = this.id ?
        `${params['name']} szerkesztése` : `Új ${params['name']} létrehozása`

      if (this.id) {
        this.userService.getOne(this.id)
          .subscribe(data => {
            this.user = data
          })
      } else {
        this.user = new User()
      }
    })

  }

  onSubmit(user: User): void {
    if (this.id) {
      this.userService.update(user).subscribe(() => history.back())
    } else {
      delete user._id
      this.userService.create(user).subscribe(() => history.back())
    }

  }

  onCancel(): void {
    history.back()
  }

}
