import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuItemDetailsPage } from './menu-item-details.page';

const routes: Routes = [
  {
    path: ':id',
    component: MenuItemDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuItemDetailsPageRoutingModule {}
