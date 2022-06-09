import { Component, OnInit, Input } from '@angular/core';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-header',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  startDate!: Date
  timeString: String = ''
  dateString: String = ''

  constructor(
    private classToggler: ClassToggleService
  ) {
    super()
  }

  ngOnInit(): void {
    this.startDate = new Date()
    this.showDate(this.startDate)
    const id = setInterval(this.showTime, 1000)
    this.showTime()
  }

  showDate = (currentDate: Date) => {
    this.dateString = currentDate.toLocaleDateString('hu')
      .replace(' ', '').replace(' ', '')
  }

  showTime = () => {
    const currentDate = new Date()
    if (this.startDate !== currentDate) { this.showDate(currentDate) }

    this.timeString = currentDate.toLocaleTimeString('hu').padStart(8, '0')
  }
}
