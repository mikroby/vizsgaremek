import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ExpertComponent } from './page/expert/expert.component';
import { CategoryComponent } from './page/category/category.component';
import { UserComponent } from './page/user/user.component';
import { OrderComponent } from './page/order/order.component';
import { InvoiceComponent } from './page/invoice/invoice.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { SelectCategoryComponent } from './page/select-category/select-category.component';
import { SearchComponent } from './page/search/search.component';
import { RoleGuardService } from './service/role-guard.service';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { ProfileComponent } from './page/profile/profile.component';
import { CategoryEditorComponent } from './editor/category-editor/category-editor.component';
import { UserEditorComponent } from './editor/user-editor/user-editor.component';
import { ExpertEditorComponent } from './editor/expert-editor/expert-editor.component';
import { OrderEditorComponent } from './editor/order-editor/order-editor.component';
import { InvoiceEditorComponent } from './editor/invoice-editor/invoice-editor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',          
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
        path: 'search/:category',
        component: SearchComponent,
        data: {
          title: 'Keresés'
        }
      },
      {
        path: 'select',
        component: SelectCategoryComponent,
        data: {
          title: 'Kategória választás'
        }
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [RoleGuardService],
        data: {
          title: 'Profil'
        }
      },
    ]    
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [RoleGuardService],
    data: {
      title: 'Admin',
      expectedRole: 3
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
          title: 'Szakember'
        }
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Kategória'
        }
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: 'Felhasználó'
        }
      },
      {
        path: 'order',
        component: OrderComponent,
        data: {
          title: 'Rendelés'
        }
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'Számla'
        }
      },
      {
        path: 'editor/category/:name/:id',
        component: CategoryEditorComponent,        
      },
      {
        path: 'editor/user/:name/:id',
        component: UserEditorComponent,        
      },
      {
        path: 'editor/expert/:name/:id',
        component: ExpertEditorComponent,        
      },
      {
        path: 'editor/order/:name/:id',
        component: OrderEditorComponent,        
      },
      {
        path: 'editor/invoice/:name/:id',
        component: InvoiceEditorComponent,        
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
