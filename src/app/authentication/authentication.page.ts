import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular'; 
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';
import { authenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
  imports: [IonicModule, CommonModule,FormsModule]
})
export class AuthenticationPage implements OnInit {
  isUserLoggedIn = false;
  authentication = {
    username:'',
    password:''
  };

  constructor(
     private router: Router,
        private alertController: AlertController,
        private utils: UtilsService,
        private navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private authenticationService: authenticationService 
  ) { }

  ngOnInit() {
  }
 
  submitAuthentication() {
    this.isUserLoggedIn =  true;
    this.utils.emitUser(this.isUserLoggedIn);
    this.router.navigate(['/home']);

   /* this.authenticationService.createAuthentication(this.authentication).subscribe(
      (response) => {
        if(response.responseData.status.includes("error")){
          alert("authentication Creation failed");
        }else{
         // console.log('Menu Item Created:', response.responseData.data.storeId);
        //this.router.navigate(['/store-details', response.responseData.data.storeId]);
        //window.location.reload()
        console.log("NEW USER ID",response.responseData.data._id)
        if(response.responseData.data._id){
          setTimeout(() => {
          //Call authentication page as an authentication after adding user.
          }, 2000);
        }
        
        this.navCtrl.navigateRoot('/authentication-details/' +response.responseData.data._id); // Reloads the current route
        setTimeout(() => {
          this.utils.showLoadingAndToast() // Stops the refresher
        }, 500);
        }
      },
      (error) => {
        console.error('Error:', error);
        alert(error+' '+'Failed to create store authentication.');
      }
    );*/
  }

}
