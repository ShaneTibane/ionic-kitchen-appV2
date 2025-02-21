import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { StoreDetailsPageRoutingModule } from './store-details-routing.module';

import { StoreDetailsPage } from './store-details.page';
const routes: Routes = [{ path: '', component: StoreDetailsPage }];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreDetailsPageRoutingModule,
    RouterModule.forChild(routes), StoreDetailsPage
  ]
})
export class StoreDetailsPageModule {}
