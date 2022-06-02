// Angular modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// CoreUI modules
import { IconModule, IconSetService } from '@coreui/icons-angular'
import {
  FooterModule, HeaderModule, NavModule, SidebarModule, GridModule,
  BadgeModule, BreadcrumbModule, DropdownModule, AvatarModule
} from '@coreui/angular'
import {
  PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
}

// Created App-components
import { HeadComponent } from './common/header/head.component'
import { SidebarComponent } from './common/sidebar/sidebar.component'
import { FootComponent } from './common/footer/foot.component'
import { HomeComponent } from './page/home/home.component'
import { ExpertComponent } from './page/expert/expert.component'
import { CategoryComponent } from './page/category/category.component'


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SidebarComponent,
    FootComponent,
    HomeComponent,
    ExpertComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    GridModule,
    BadgeModule,
    BreadcrumbModule,
    DropdownModule,
    AvatarModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
