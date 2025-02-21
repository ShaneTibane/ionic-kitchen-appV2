import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AddStoreOwnerPageRoutingModule } from './add-store-owner-routing.module';

import { AddStoreOwnerPage } from './add-store-owner.page';
import { AddMenuItemPage } from '../add-menu-item/add-menu-item.page';
const routes: Routes = [{ path: '', component: AddStoreOwnerPage }];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStoreOwnerPageRoutingModule,
     RouterModule.forChild(routes), AddMenuItemPage
  ]
})
export class AddStoreOwnerPageModule {}
