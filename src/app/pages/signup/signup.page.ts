import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  imports: [IonicModule, CommonModule,HeaderComponent],
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],  
})  
export class SignupPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }


}
