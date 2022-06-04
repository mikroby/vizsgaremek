import { Component, OnInit, Input } from '@angular/core';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-header',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  constructor(
    private classToggler: ClassToggleService
  ) {
    super()
  }

  ngOnInit(): void {
  }

}
