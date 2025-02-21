import { Component } from '@angular/core';
import { UtilsService } from './services/utils.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  isUserLoggedIn = false;
  private authSubscription: Subscription;
  constructor(
    private utils: UtilsService,
    private router: Router) {
     // Subscribe to user data changes
     this.authSubscription = this.utils.user$.subscribe((user) => {
      this.isUserLoggedIn = user;
    });
  }

  signOut(){
    this.utils.showButtonsAlert("AWS Sign out","Are you want to sign out",(acceptted)=>{
      console.log("acceptted",acceptted)
      if(acceptted == "yes"){
        this.router.navigate(['/home']);
      }
    })
  }
}
