import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonAlert, IonButton, IonicModule } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { UtilsService } from 'src/app/services/utils.service';
import { OptionsAlertComponent } from 'src/app/options-alert/options-alert.component';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { Store } from '../../models/store.model';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  imports: [IonicModule, CommonModule,OptionsAlertComponent],
})
export class AccountPage implements OnInit {
    stores: Store[] = [];
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];
  isAlertOpen = false;
  constructor(private utils:UtilsService,private storeService: StoreService,private router: Router) { }

  ngOnInit() {
    this.fetchStores();
  }
  fetchStores() {
    this.utils.showLoadingAndToast() 
    //this.presentToast("middle")
    const payload =  { "modelName": "Store" }; // Add necessary parameters if required
    this.storeService.getStores(payload).subscribe(
      (data) => {
        console.log("DATA:",data)
        if(data.responseData.status.includes("error")){
          this.utils.showInformationAlert('Store List error','Failed to get store list. '+ data.message);
        }else{
          this.stores = data.responseData.data;
        }
      },
      (error) => {
        this.utils.showInformationAlert('Store List error','Server Store List error '+ error);
      }
    );
  }
  async deleteStore() {
   

    
  }
  async openStoreForm() {
   

  }
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;  
  } 
  showAlert() {
    this.utils.showInformationAlert('Store Creation', 'Failed to create store, please try again.')
  }
  callbackAfterAlert(data:string){
    alert("data "+ data)
  }
  
} 
