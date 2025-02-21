import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmployeePageRoutingModule } from './add-employee-routing.module';

import { AddEmployeePage } from './add-employee.page';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: AddEmployeePage }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEmployeePageRoutingModule,
      RouterModule.forChild(routes), AddEmployeePage
  ]
})
export class AddEmployeePageModule {}
