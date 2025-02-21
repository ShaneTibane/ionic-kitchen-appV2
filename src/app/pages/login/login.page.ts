import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [IonicModule, CommonModule,HeaderComponent,FormsModule],
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }
  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }

  ngOnInit() {
  }

}
