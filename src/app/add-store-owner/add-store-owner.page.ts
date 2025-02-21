import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular';
import { StoreOwnerService } from '../services/store-owner.service';
import { UtilsService } from '../services/utils.service';
import type { OverlayEventDetail } from '@ionic/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-store-owner',
  templateUrl: './add-store-owner.page.html',
  styleUrls: ['./add-store-owner.page.scss'],
  imports: [IonicModule, CommonModule,FormsModule]
})
export class AddStoreOwnerPage implements OnInit {
  storeOwner = {
    name: '',
    surname: '',
    mobileNumber: '',
    photo: '',
    username:'',
    password:'',
    confirmPassword:'',
    modelName:"StoreOwner",
    UserType:"StoreOwner",
    storeId:""
  };
  
  public createStoreAlertButton = [
    {
      text: 'No',
      role: 'cancel', 
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Yes',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
  constructor(
    private router: Router,
    private alertController: AlertController,
    private utils: UtilsService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storeOwnerService: StoreOwnerService   ) {

    }
   confirmAlertResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }
  async presentAddStoreAlert(userId:String) {
    const alert = await this.alertController.create({
      header: 'Add Store',
      message: 'Would like to add a store to this User?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('User cancelled');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('User confirmed',userId);
            localStorage.setItem("storeOwnerUserID", userId.toString());
            this.router.navigate(['/add-store']);
          }
        }
      ] 
    });
    await alert.present();
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
  submitStoreOwner() {
    this.storeOwnerService.createStoreOwner(this.storeOwner).subscribe(
      (response) => {
        if(response.responseData.status.includes("error")){
          alert("Store Owner Creation failed");
        }else{
         // console.log('Menu Item Created:', response.responseData.data.storeId);
        //this.router.navigate(['/store-details', response.responseData.data.storeId]);
        //window.location.reload()
        console.log("NEW USER ID",response.responseData.data._id)
        if(response.responseData.data._id){
          setTimeout(() => {
            this.presentAddStoreAlert(response.responseData.data._id); // Show alert after saving
          }, 2000);
        }
        
        this.navCtrl.navigateRoot('/store-owner-details/' +response.responseData.data._id); // Reloads the current route
        setTimeout(() => {
          this.utils.showLoadingAndToast() // Stops the refresher
        }, 500);
        }
      },
      (error) => {
        console.error('Error:', error);
        alert(error+' '+'Failed to create store owner.');
      }
    );
  }

}
