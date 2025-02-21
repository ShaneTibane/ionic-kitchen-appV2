import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { MenuItem } from '../models/menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '../services/menu-item.service';
import { UtilsService } from '../services/utils.service';
@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.page.html',
  styleUrls: ['./menu-item-details.page.scss'],
   imports: [IonicModule, CommonModule]
})
export class MenuItemDetailsPage implements OnInit {
menuItem: MenuItem | undefined;
  constructor(
    private route: ActivatedRoute,
    private menuItemService: MenuItemService,
    private utils: UtilsService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.utils.showLoadingAndToast();
    const menuItemId = this.route.snapshot.paramMap.get('id');
    if (menuItemId) {
      const payload =  { "modelName": "MenuItem" ,"id":menuItemId}; // Add necessary parameters if required
      this.menuItemService.getMenuItemById(payload).subscribe(
        (data) => { 
          this.menuItem = data.responseData.data;
        },
        (error) => {
          this.utils.showInformationAlert('Menu Item','Error fetching menu item'+ error);
        }
      );
    }
  }
  goBack() {
    this.navCtrl.back(); // Navigates to the previous page
  }
}
