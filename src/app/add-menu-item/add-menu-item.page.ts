import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { MenuItemService } from '../services/menu-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.page.html',
  styleUrls: ['./add-menu-item.page.scss'],
  imports: [IonicModule, CommonModule,FormsModule]
})
export class AddMenuItemPage implements OnInit {
   menuItem = {
    name: '',
    description: '',
    price: '',
    logo: '',
    modelName:"MenuItem",
    storeId:''
  };
  storeId :string | null;
  constructor(  private loadingCtrl: LoadingController,private utils: UtilsService,
    private toastCtrl: ToastController,private navCtrl: NavController,private menuItemService: MenuItemService, private router: Router,private route: ActivatedRoute) { 
      this.storeId = this.route.snapshot.paramMap.get('id' );
    }

  ngOnInit() {
    
  }

  async showLoadingAndToast() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 2000, // Adjust time as needed
    });

    await loading.present();

    loading.onDidDismiss().then(() => {
      this.showToast('Data loaded successfully!');
    });
  }
  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      position: 'bottom',
      color: 'success',
    });

    await toast.present();
  }

  submitMenuItem() {
    const body = this.utils.getDataToSendToServer(this.menuItem);
    if(body){
    if(this.storeId!=null){
      this.menuItem["storeId"] = this.storeId;
    }
    this.menuItemService.createMenuItem(body).subscribe(
      (response) => {
        if(response.responseData.status.includes("error")){
          alert("Menu Item Creation failed");
        }else{
          console.log('Menu Item Created:', response.responseData.data.storeId);
        this.navCtrl.navigateRoot('/store-details/' +response.responseData.data.storeId); // Reloads the current route
        setTimeout(() => {
          this.utils.showLoadingAndToast() // Stops the refresher
        }, 500);
      }
      },
      (error) => {
        console.error('Error:', error);
        alert(error+' '+'Failed to create menu item.');
      }
    );
    }
    
  }

  
}
