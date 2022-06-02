import { Component, OnInit } from '@angular/core';
// import { ConfigService, IMenuItem } from 'src/app/service/config.service';

import { navItems } from './_nav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  // sidebar: IMenuItem[] = this.config.sidebarMenu

  constructor(
    // private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
