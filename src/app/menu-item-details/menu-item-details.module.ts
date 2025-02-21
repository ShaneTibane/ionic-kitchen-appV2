import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenuItemDetailsPageRoutingModule } from './menu-item-details-routing.module';

import { MenuItemDetailsPage } from './menu-item-details.page';
const routes: Routes = [{ path: '', component: MenuItemDetailsPage }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuItemDetailsPageRoutingModule,
    RouterModule.forChild(routes), MenuItemDetailsPage
  ]
})
export class MenuItemDetailsPageModule {}
