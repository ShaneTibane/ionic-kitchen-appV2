import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class StoreOwnerService {
  private apiUrl  ='';  
  //private apiUrl = 'https://express-menu-item-microservice.onrender.com/menu-item';
  

  constructor(private http: HttpClient,private utilsService : UtilsService) {
    this.apiUrl = this.utilsService.apiUrl +'store-owner' ;  
  }

  getStoreOwnerListStoreById(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/storeOwnerList", payload);
  }
  createStoreOwner(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/createstoreOwner", payload);
  }
  getStoreOwnerById(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/storeOwnerDetails", payload);
  }
}
  