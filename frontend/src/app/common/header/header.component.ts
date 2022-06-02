import { Component, OnInit, Input } from '@angular/core';

// import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  constructor() { }

  ngOnInit(): void {
  }

}
