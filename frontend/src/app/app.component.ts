import { Component, AfterViewInit } from '@angular/core';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'MesterEmber kereső';

  constructor(
    private titleService: Title,
    public iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngAfterViewInit() {
    (document.querySelector('#spinner') as HTMLDivElement).style.display = 'none'
  }

}
