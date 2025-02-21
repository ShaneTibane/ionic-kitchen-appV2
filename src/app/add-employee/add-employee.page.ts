import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, NavController, ToastController } from '@ionic/angular'; 
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';
import { StoreEmployeeService } from '../services/store-employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
  imports: [IonicModule, CommonModule,FormsModule]
})
export class AddEmployeePage implements OnInit {
  storeEmployee = {
    name: '',
    surname: '',
    mobileNumber: '',
    photo: '',
    username:'',
    password:'',
    confirmPassword:'',
    modelName:"StoreEmployee",
    UserType:"StoreEmployee",
    storeId:""
  };

  constructor(
     private router: Router,
        private alertController: AlertController,
        private utils: UtilsService,
        private navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private storeEmployeeService: StoreEmployeeService 
  ) { }

  ngOnInit() {
  }
 
  submitStoreEmployee() {
    this.storeEmployeeService.createStoreEmployee(this.storeEmployee).subscribe(
      (response) => {
        if(response.responseData.status.includes("error")){
          alert("Store Employee Creation failed");
        }else{
         // console.log('Menu Item Created:', response.responseData.data.storeId);
        //this.router.navigate(['/store-details', response.responseData.data.storeId]);
        //window.location.reload()
        console.log("NEW USER ID",response.responseData.data._id)
        if(response.responseData.data._id){
          setTimeout(() => {
          //Call authentication page as an employee after adding user.
          }, 2000);
        }
        
        this.navCtrl.navigateRoot('/store-Employee-details/' +response.responseData.data._id); // Reloads the current route
        setTimeout(() => {
          this.utils.showLoadingAndToast() // Stops the refresher
        }, 500);
        }
      },
      (error) => {
        console.error('Error:', error);
        alert(error+' '+'Failed to create store Employee.');
      }
    );
  }

}
