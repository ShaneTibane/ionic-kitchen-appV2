import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonAlert, IonButton, IonicModule } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { UtilsService } from 'src/app/services/utils.service';
import { OptionsAlertComponent } from 'src/app/options-alert/options-alert.component';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  imports: [IonicModule, CommonModule,OptionsAlertComponent],
})
export class AccountPage implements OnInit {
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
  constructor(private utils: UtilsService) { }

  ngOnInit() {
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
