import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenuItemPageRoutingModule } from './menu-item-routing.module';

import { MenuItemPage } from './menu-item.page';
const routes: Routes = [{ path: '', component: MenuItemPage }];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuItemPageRoutingModule,
    RouterModule.forChild(routes), MenuItemPage
  ]
})
export class MenuItemPageModule {}
