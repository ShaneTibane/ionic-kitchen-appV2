import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private userSubject = new BehaviorSubject<any>(null); // Store user data
  user$ = this.userSubject.asObservable(); // Expose observable to listen for changes 
   apiUrl ="http://localhost:3001/ESB/";
  // apiUrl ="http://18.227.111.189:3001/ESB/"
  //apiUrl ="http://3.145.80.38:3001/ESB/"
   public alertButtons = [
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
  constructor(private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private alertController: AlertController,
              private toastController: ToastController) {}  
emitUser(user: any) {
    this.userSubject.next(user);
  }
  async showLoadingAndToast() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 500, // Adjust time as needed
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

  getDataToSendToServer(modelData:any){ 
    const body = {
      modelName:modelData.modelName,
      data:modelData
    }
    return body;
  }
  async showButtonsAlert(   header: string, message: string,  callback: (data:string) => void ) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('User cancelled');
            callback('cancel');
          }
        },
        {
          text: 'Yes',
          handler: () => {
           // Pass function to execute here
           callback('yes');
          }
        }
      ]
    });
    await alert.present();
  }
  async showInformationAlert(   header: string, message: string ) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Ok']
    });
    await alert.present();
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Loading..',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
  
}
    