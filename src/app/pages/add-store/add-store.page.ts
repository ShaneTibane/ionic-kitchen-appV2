import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonicModule } from '@ionic/angular'; // ✅ Import IonicModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.page.html',
  styleUrls: ['./add-store.page.scss'],
  imports: [IonicModule, CommonModule,HeaderComponent, FormsModule],
})
export class AddStorePage {
  store = {
    name: '',
    description: '',
    address:'',
    logo: '',
    phone:'',
    modelName:"Store"
  };

  constructor(private storeService: StoreService, private router: Router,private utils: UtilsService) {}

  submitStore() {
    const body = this.utils.getDataToSendToServer(this.store);
    if(body){
      this.storeService.createStore(body).subscribe(
        (response) => {
          if(response.responseData.status.includes("error")){
           this.utils.showInformationAlert('Store','Store created successfully.');
          }else{
            console.log('Store Created:', response);
          this.utils.showInformationAlert('Store','Store created successfully.');
          this.router.navigate(['/store-details', response.responseData.data._id]);
          }
        },
        (error) => {
          this.utils.showInformationAlert('Store','Failed to create store. '+error);
        }
      );
    }else{
      this.utils.showInformationAlert('Store','Failed to create store please try again.');
    }
  }
  callbackAfterAlert(data:string){
  }
  
}
