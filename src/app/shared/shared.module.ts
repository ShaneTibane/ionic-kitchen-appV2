import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [] // Export so other modules can use it
})
export class SharedModule {}
