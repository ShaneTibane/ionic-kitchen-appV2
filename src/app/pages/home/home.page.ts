import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { Post } from '../../models/post.models';
import { Store } from '../../models/store.model';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true, 
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, HeaderComponent]
})
export class HomePage {
  stores: Store[] = [];
  isUserLoggedIn = false;
  private authSubscription: Subscription;
 
  constructor(private utils:UtilsService,
              private storeService: StoreService, 
              private router: Router) {

                this.authSubscription = this.utils.user$.subscribe((user) => {
                  this.isUserLoggedIn = user;
                });
              }
  ngOnInit() {
    this.fetchStores();
  }
  
  goToSignUpPage() {
    this.router.navigate(['/sign-up']);
  }
  fetchStores() {
    this.utils.showLoadingAndToast() 
    //this.presentToast("middle")
    const payload =  { "modelName": "Restuarant" }; // Add necessary parameters if required
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
    goToStoreDetails(_id: String) {
      this.router.navigate(['/store-details', _id]);
    }
  presentToast(position: 'top' | 'middle' | 'bottom'){
    this.utils.presentToast(position)
  }
  
}
