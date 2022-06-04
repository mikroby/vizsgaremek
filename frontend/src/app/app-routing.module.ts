import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ExpertComponent } from './page/expert/expert.component';
import { CategoryComponent } from './page/category/category.component';
import { CustomerComponent } from './page/customer/customer.component';
import { OrderComponent } from './page/order/order.component';
import { InvoiceComponent } from './page/invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'expert',
    component: ExpertComponent,
    data: {
      title: 'Expert'
    }
  },
  {
    path: 'category',
    component: CategoryComponent,
    data: {
      title: 'Category'
    }
  },
  {
    path: 'customer',
    component: CustomerComponent,
    data: {
      title: 'Customer'
    }
  },
  {
    path: 'order',
    component: OrderComponent,
    data: {
      title: 'Order'
    }
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
    data: {
      title: 'Invoice'
    }
  },
  {
    path: '**',
    redirectTo: '',
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
