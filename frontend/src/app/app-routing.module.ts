import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ExpertComponent } from './page/expert/expert.component';
import { CategoryComponent } from './page/category/category.component';

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
