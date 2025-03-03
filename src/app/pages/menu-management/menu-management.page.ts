import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'src/app/models/menu';

import { StoreService } from 'src/app/services/store.service';
import { UtilsService } from 'src/app/services/utils.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonicModule } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.page.html',
  styleUrls: ['./menu-management.page.scss'],
    imports: [IonicModule, CommonModule,HeaderComponent, FormsModule],
})
export class MenuManagementPage implements OnInit {
  
  menuItem = {
    name: '',
      description: '',
      price:'',
      logo:'',
      restaurantId:this.route.snapshot.paramMap.get('id') || ''
  };

  //menus: Menu[] = [];

  constructor(
    private route: ActivatedRoute,
    private storeService:StoreService,
    private menuItemService:MenuItemService,
    private utils:UtilsService,
  ) {}

  ngOnInit() {
   console.log("ngOnInit this.menuItem.restaurantId",this.menuItem.restaurantId)
    //this.loadMenus(this.menuItem.restaurantId);
  }

  loadMenus(restaurantId: any) {
    this.utils.showLoadingAndToast() 
    //this.presentToast("middle")
    const payload =  { "modelName": "Restuarant", "restaurantId":restaurantId }; // Add necessary parameters if required
    this.storeService.getMenusByRestaurant(payload).subscribe(
      (data) => {
        console.log("DATA:",data)
        if(data.responseData.status.includes("error")){
          this.utils.showInformationAlert('Store List error','Failed to get store list. '+ data.message);
        }else{
          console.log("LOAD MENUS")
         // this.menus = data.responseData.data;
        }
      },
      (error) => {
        this.utils.showInformationAlert('Store List error','Server Store List error '+ error);
      }
    );
  //  this.menus = this.storeService.getMenusByRestaurant(this.restaurantId);
  }
  createMenu() {

      console.log("Create Menu Item",this.menuItem)
      const payload =  { "modelName": "Restuarant" ,"data":this.menuItem}
      console.log("PAYELOAD createMenu",payload)
      this.menuItemService.createMenuItem(payload);
    
    //  this.loadMenus(this.menuItem.restaurantId); // Refresh the menu list
    
  }

  /*createMenu() {
    if (this.menuName.trim()) {
      this.storeService.addMenu(this.restaurantId, this.menuName);
      this.menuName = ''; // Clear input field
      this.loadMenus(); // Refresh the menu list
    }
  }

  addMenuItem(menuId: string) {
    // Navigate to add menu item page
  }*/
}
