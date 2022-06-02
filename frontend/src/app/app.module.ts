// Angular modules
import { NgModule } from '@angular/core'
import { BrowserModule, Title } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// CoreUI modules
import { IconModule, IconSetService } from '@coreui/icons-angular'
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
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
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService, Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
