import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ExpertComponent } from './page/expert/expert.component';
import { CategoryComponent } from './page/category/category.component';
import { CustomerComponent } from './page/customer/customer.component';
import { OrderComponent } from './page/order/order.component';
import { InvoiceComponent } from './page/invoice/invoice.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { SearchComponent } from './page/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Belépés'
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          title: 'Regisztráció'
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: 'Keresés'
        }
      },
    ]    
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Vezérlőpult'
        }
      },
      {
        path: 'expert',
        component: ExpertComponent,
        data: {
          title: 'Szakemberek'
        }
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Kategóriák'
        }
      },
      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: 'Felhasználók'
        }
      },
      {
        path: 'order',
        component: OrderComponent,
        data: {
          title: 'Rendelések'
        }
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'Számlák'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
    // relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
