import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular'; 
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
  imports: [IonicModule, CommonModule,FormsModule]
})
export class AddCustomerPage implements OnInit {
  customer = {
    name: '',
    surname: '',
    mobileNumber: '',
    photo: '',
    username:'',
    password:'',
    confirmPassword:'',
    modelName:"Customer",
    UserType:"Customer",
    storeId:""
  };

  constructor(
     private router: Router,
        private alertController: AlertController,
        private utils: UtilsService,
        private navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private customerService: CustomerService 
  ) { }

  ngOnInit() {
  }
 
  submitCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(
      (response) => {
        if(response.responseData.status.includes("error")){
          alert("Customer Creation failed");
        }else{
         // console.log('Menu Item Created:', response.responseData.data.storeId);
        //this.router.navigate(['/store-details', response.responseData.data.storeId]);
        //window.location.reload()
        console.log("NEW USER ID",response.responseData.data._id)
        if(response.responseData.data._id){
          setTimeout(() => {
          //Call authentication page as an customer after adding user.
          }, 2000);
        }
        
        this.navCtrl.navigateRoot('/customer-details/' +response.responseData.data._id); // Reloads the current route
        setTimeout(() => {
          this.utils.showLoadingAndToast() // Stops the refresher
        }, 500);
        }
      },
      (error) => {
        console.error('Error:', error);
        alert(error+' '+'Failed to create store customer.');
      }
    );
  }

}
