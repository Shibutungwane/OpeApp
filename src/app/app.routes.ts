import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/Login/Login.component';


import { NotfoundComponent } from './notfound/notfound.component';
import { MainLayout } from './layout/main-layout/main-layout';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { UserProfileComponent } from './userProfile/userProfile.component';
import { ProductComponent } from './Product/Product.component';


export const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login WITHOUT layout
  { path: 'login', component: LoginComponent },

  // Routes WITH layout
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'Customer',
        // component: TestingPageComponent
        loadComponent: () =>
          import('./Customer/Customer.component').then((m) => m.CustomerComponent),
      },
  
      { path: 'dashboard', component: DashboardComponent },
      { path: 'userprofile', component: UserProfileComponent },
        { path: 'Product', component: ProductComponent },

      { path: '**', component: NotfoundComponent },
    ],
  },

  // { path: '**', component: NotfoundComponent }
];
