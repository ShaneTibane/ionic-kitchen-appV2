import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { StoreListPageRoutingModule } from './store-list-routing.module';

import { StoreListPage } from './store-list.page';
const routes: Routes = [{ path: '', component: StoreListPage }];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreListPageRoutingModule,
    RouterModule.forChild(routes), StoreListPage
  ]
})
export class StoreListPageModule {}
