import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuManagementPage } from './menu-management.page';

const routes: Routes = [
  {
    path: ':id',
    component: MenuManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuManagementPageRoutingModule {}
