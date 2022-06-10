import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { navItems } from './_navBar.items';

// import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sideNavbar.component.html',
  styleUrls: ['./sideNavbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  sideBar_full = this.config.sideBarWidth_full
  sideBar_narrow = this.config.sideBarWidth_narrow

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  // sidebar: IMenuItem[] = this.config.sidebarMenu

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

  // sideBar and header toggle correction.
  changeWrapper(): void {
    const wrapper = (document.querySelector('.wrapper') as HTMLDivElement)
    const sideBar = document.querySelector('c-sidebar')?.classList;
    wrapper.style.paddingLeft = !sideBar?.contains('sidebar-narrow-unfoldable') ?
      `${this.sideBar_narrow}px` : `${this.sideBar_full}px`
  }

}