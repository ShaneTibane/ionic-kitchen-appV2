import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.page.html',
  styleUrls: ['./menu-item.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class MenuItemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
