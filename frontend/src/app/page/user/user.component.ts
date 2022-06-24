import { User } from 'src/app/model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // list$ = this.userService.getAll()
  list: User[] | null = null

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.userService.getAll().subscribe(
      data => this.list = data
    )
  }

  onRemove(_id: string): void {
    this.userService.delete(_id).subscribe(
      () => this.getList()
    )
  }

}