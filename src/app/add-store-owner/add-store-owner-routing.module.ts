import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStoreOwnerPage } from './add-store-owner.page';

const routes: Routes = [
  {
    path: '',
    component: AddStoreOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStoreOwnerPageRoutingModule {}
