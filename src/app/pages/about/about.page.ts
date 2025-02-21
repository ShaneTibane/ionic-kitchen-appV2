import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  imports: [IonicModule, CommonModule,HeaderComponent],
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
