import { Component, Input, OnInit } from '@angular/core';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { IonAlert, IonButton } from '@ionic/angular/standalone';
import type { OverlayEventDetail } from '@ionic/core';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { StoreOwnerService } from '../services/store-owner.service';

@Component({
  selector: 'app-options-alert',
  templateUrl: './options-alert.component.html',
  styleUrls: ['./options-alert.component.scss'],
  imports: [IonicModule, CommonModule],
})

export class OptionsAlertComponent  implements OnInit {
  isAlertOpen = false;
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'No',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'Yes',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ]

  constructor(private router: Router,
              private alertController: AlertController,
              private utils: UtilsService,
              private navCtrl: NavController, 
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private storeOwnerService: StoreOwnerService ) { }

  ngOnInit() {}
  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }
  confirmAlertResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }
  async presentAlert(userId:String) {
    console.log("call aerts")
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

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
  


}
