import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'add-store',
    loadChildren: () => import('./pages/add-store/add-store.module').then( m => m.AddStorePageModule)
  },
  {
    path: 'store-list',
    loadChildren: () => import('./store-list/store-list.module').then( m => m.StoreListPageModule)
  },
  {
    path: 'store-details',
    loadChildren: () => import('./store-details/store-details.module').then( m => m.StoreDetailsPageModule)
  },
  {
    path: 'menu-item',
    loadChildren: () => import('./menu-item/menu-item.module').then( m => m.MenuItemPageModule)
  },
  {
    path: 'add-menu-item',
    loadChildren: () => import('./add-menu-item/add-menu-item.module').then( m => m.AddMenuItemPageModule)
  },
  {
    path: 'menu-item-details',
    loadChildren: () => import('./menu-item-details/menu-item-details.module').then( m => m.MenuItemDetailsPageModule)
  },
  {
    path: 'add-store-owner',
    loadChildren: () => import('./add-store-owner/add-store-owner.module').then( m => m.AddStoreOwnerPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'store-employee',
    loadChildren: () => import('./add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./add-customer/add-customer.module').then( m => m.AddCustomerPageModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },  {
    path: 'menu-management',
    loadChildren: () => import('./pages/menu-management/menu-management.module').then( m => m.MenuManagementPageModule)
  },





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
