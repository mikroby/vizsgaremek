import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // columns = this.config.customerTableColumns

  list$ = this.userService.getAll()

  constructor(
    // private config: ConfigService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

}