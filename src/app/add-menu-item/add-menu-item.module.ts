import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AddMenuItemPageRoutingModule } from './add-menu-item-routing.module';

import { AddMenuItemPage } from './add-menu-item.page';
const routes: Routes = [{ path: '', component: AddMenuItemPage }];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMenuItemPageRoutingModule,
    RouterModule.forChild(routes), AddMenuItemPage
  ]
})
export class AddMenuItemPageModule {}
