import { Component, OnInit } from '@angular/core';
import { navItems } from './_navBar.items';

// import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sideNavbar.component.html',
  styleUrls: ['./sideNavbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

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
