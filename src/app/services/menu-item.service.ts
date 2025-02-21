import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  private apiUrl  ='';  
  //private apiUrl = 'https://express-menu-item-microservice.onrender.com/menu-item';
  

  constructor(private http: HttpClient,private utilsService : UtilsService) {
    this.apiUrl = this.utilsService.apiUrl +'menu-item' ;  
  }

  getMenuListStoreById(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/menuItemList", payload);
  }
  createMenuItem(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/createMenuItem", payload);
  }
  getMenuItemById(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/menuItemDetails", payload);
  }
}
  