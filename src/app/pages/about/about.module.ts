import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { SharedModule } from 'src/app/shared/shared.module';
const routes: Routes = [{ path: '', component: AboutPage }];
@NgModule({
  imports: [
  
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    RouterModule.forChild(routes), AboutPage
  ]
})
export class AboutPageModule {}
