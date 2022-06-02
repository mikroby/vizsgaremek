import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent extends FooterComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
