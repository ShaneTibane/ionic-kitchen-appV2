import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';

@Component({
  imports: [IonicModule, CommonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})  
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
