import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { StoreService } from '../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '../models/store.model';
import { MenuItemService } from '../services/menu-item.service';
import { MenuItem } from '../models/menu-item.model';
import { UtilsService } from '../services/utils.service';
import { Subscription } from 'rxjs';
@Component({
  imports: [IonicModule, CommonModule],
  selector: 'app-store-details',
  templateUrl: './store-details.page.html',
  styleUrls: ['./store-details.page.scss'],
})

export class StoreDetailsPage implements OnInit {
  cartCount = 3
  isUserLoggedIn = false;
  private authSubscription: Subscription;
  store: Store | undefined;
  storeName = '';
  menuItems: MenuItem[] = [];
  noMenuItemsMessage =true;
  constructor( private storeService: StoreService,
              private menuItemService: MenuItemService,
              private route: ActivatedRoute,
              private router: Router,
              private utils:UtilsService,
            private navCtrl: NavController) { 
     // Subscribe to user data changes
     this.authSubscription = this.utils.user$.subscribe((user) => {
      this.isUserLoggedIn = user;
    });
    const storeId = this.route.snapshot.paramMap.get('id');
   
    if (storeId) {
      const payload =  { "modelName": "Store" ,"id":storeId}; // Add necessary parameters if required
      this.storeService.getStoreById(payload).subscribe(
        (data) => {
          this.store = data.responseData.data;
          this.storeName = data.responseData.data.name
        },
        (error) => {
          console.error('Error fetching stores:', error);
        }
      );
      const menuItemListPayload = {"modelName":"MenuItem","id":storeId}
      this.menuItemService.getMenuListStoreById(menuItemListPayload).subscribe(
        (data) => {
        
          if(data.responseData.status.includes("error")){
            alert("Menu Item List error");
          }else{
            this.utils.showLoadingAndToast();
            if(data.responseData.data.length > 0){
              this.noMenuItemsMessage = false;
              this.menuItems = data.responseData.data;
            }else{
              this.menuItems = data.responseData.data;
            }
          }
        },
        (error) => {
          alert("Server Menu Item List error");
          console.error('Error fetching menu items:', error);
        }
      );
    }

  }
  openCart() {
    this.router.navigate(['/']); // Navigate to your cart page
  }
  goBack() {
    this.navCtrl.back(); // Navigates to the previous page
  }
  ngOnInit() {
    const storeId = this.route.snapshot.paramMap.get('id');
    
  }
   goToAddMenuItem() {
    this.router.navigate(['/add-menu-item', this.route.snapshot.paramMap.get('id')]);
  }
  goToMenuItemDetails(menuItemId:any){
console.log(" goToMenuItemDetails menuItemId",menuItemId)
this.router.navigate(['/menu-item-details', menuItemId]);
  }

}
