import { ConfigService } from 'src/app/service/config.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent extends HeaderComponent implements OnInit, AfterViewInit {

  @Input() sidebarId: string = "sidebar";

  dateString: string = ''
  timeString: string = ''

  sideBar_full = this.config.sideBarWidth_full
  sideBar_narrow = this.config.sideBarWidth_narrow

  user$ = this.auth.user$;

  constructor(
    private auth: AuthService,
    private config: ConfigService,
  ) {
    super()
  }

  ngOnInit(): void {
    this.showDateTime()
    const id = setInterval(this.showDateTime, 1000)
  }

  showDateTime = () => {
    const currentDate = new Date()
    this.dateString = currentDate.toLocaleDateString('hu')
      .replace(' ', '').replace(' ', '')
    this.timeString = currentDate.toLocaleTimeString('hu').padStart(8, '0')
  }

  // sideBar and header toggle correction.
  changeSidebar(): void {
    const wrapper = (document.querySelector('.wrapper') as HTMLDivElement)
    const sideBar = document.querySelector('c-sidebar')?.classList;

    if (!sideBar?.contains('hide')) { wrapper.style.paddingLeft = '0' }
    else {
      wrapper.style.paddingLeft = sideBar?.contains('sidebar-narrow-unfoldable') ?
        `${this.sideBar_narrow}px` : `${this.sideBar_full}px`
    }
  }

  // default header-width to full-width sideBar.
  ngAfterViewInit(): void {
    (document.querySelector('.wrapper') as HTMLDivElement)
      .style.paddingLeft = `${this.sideBar_full}px`;
  }

}
