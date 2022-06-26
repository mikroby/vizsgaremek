import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { Component, OnInit, Input } from '@angular/core';

import { HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  chronometer: string = ''

  sideBar_full = this.config.sideBarWidth_full
  sideBar_narrow = this.config.sideBarWidth_narrow

  apiUrl: string = environment.apiUrl

  user$ = this.auth.user$

  layout!: string

  constructor(
    private auth: AuthService,
    private config: ConfigService,
    private ar: ActivatedRoute,
    // private router: Router,
  ) {
    super()
  }

  ngOnInit(): void {
    this.showDateTime()
    interval(1000).subscribe(
      () => this.showDateTime()
    )

    this.getLayout()
  }

  showDateTime = () => {
    const currentDate = new Date()
    const dateString = currentDate.toLocaleDateString('hu')
      .replace(' ', '').replace(' ', '')
    const day = this.config.weekDays[currentDate.getDay()]
    const timeString = currentDate.toLocaleTimeString('hu').padStart(8, '0')
    this.chronometer = `${dateString} - ${day} - ${timeString}`
  }

  // CoreUI sideBar and header toggle correction.
  changeSidebar(): void {
    const wrapper = (document.querySelector('.wrapper') as HTMLDivElement)
    const sideBar = document.querySelector('c-sidebar')?.classList;

    if (!sideBar?.contains('hide')) { wrapper.style.paddingLeft = '0' }
    else {
      wrapper.style.paddingLeft = sideBar?.contains('sidebar-narrow-unfoldable') ?
        this.sideBar_narrow : this.sideBar_full
    }
  }
 
  getLayout(): void {
    this.ar.data.subscribe(params => {
      this.layout = params['title']
    })
  }

}
