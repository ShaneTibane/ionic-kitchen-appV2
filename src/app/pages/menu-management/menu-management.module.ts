import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuManagementPageRoutingModule } from './menu-management-routing.module';

import { MenuManagementPage } from './menu-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuManagementPageRoutingModule
  ]
})
export class MenuManagementPageModule {}
