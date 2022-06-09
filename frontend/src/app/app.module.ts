// Angular modules
import { NgModule } from '@angular/core'
import { BrowserModule, Title } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
// import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common'

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
  TableModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular'
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar'


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
}

// Developer Created modules
import { TableMakerModule } from './table-maker/table-maker.module';

// Developer Created App-components
import { HomeComponent } from './page/home/home.component'
import { HeadComponent } from './common/header/head.component'
import { SideNavbarComponent } from './common/sideNavbar/sideNavbar.component'
import { FootComponent } from './common/footer/foot.component'
import { DashboardComponent } from './page/dashboard/dashboard.component'
import { ExpertComponent } from './page/expert/expert.component'
import { CategoryComponent } from './page/category/category.component';
import { InvoiceComponent } from './page/invoice/invoice.component';
import { CustomerComponent } from './page/customer/customer.component';
import { OrderComponent } from './page/order/order.component';
import { LoginComponent } from './page/login/login.component';

// Developer Created Services Interceptors
import { JwtInterceptor } from './service/jwt.interceptor'
import { AuthService } from './service/auth.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    SideNavbarComponent,
    FootComponent,
    DashboardComponent,
    ExpertComponent,
    CategoryComponent,
    InvoiceComponent,
    CustomerComponent,
    OrderComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  
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
    TableModule,

    TableMakerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      deps: [
        AuthService,
      ],
      multi: true,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
