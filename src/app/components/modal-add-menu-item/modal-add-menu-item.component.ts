import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, IonicModule } from '@ionic/angular';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-modal-add-menu-item',
  templateUrl: './modal-add-menu-item.component.html',
  styleUrls: ['./modal-add-menu-item.component.scss'],
   imports: [IonicModule,FormsModule, CommonModule],
})
export class ModalAddMenuItemComponent  {
  @Input() restuarantId: string = '';

  menuItem = {
    name: '',
      description: '',
      price:'',
      logo:'',
      restaurantId:"shane"
  };
  constructor(  
    private modalCtrl: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    private menuItemService:MenuItemService,) {
      
  
  } 

  submitMenuItem(event: Event) {
    //event.preventDefault();
    console.log("Email", this.restuarantId)
    
    console.log('event this.restuarantId:');
    this.menuItem.restaurantId =  this.restuarantId;
    console.log('User Info:', this.menuItem);
    //this.closeModal();
    const payload =  { "modelName": "MenuItem" ,"data":this.menuItem}
    this.menuItemService.createMenuItem(payload).subscribe(
      (response) => {
       console.log("Response response response",response)
      },
      (error) => {
        console.error('Error:', error);
        alert(error+' '+'Failed to create menu item.');
      }
    );
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
   // return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
