import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl  ='';
  private esbApiUrl= '';
  //private apiUrl = 'https://express-stores-microservice.onrender.com/stores' ;
  constructor(private http: HttpClient, private utilsService : UtilsService) {
    this.apiUrl = this.utilsService.apiUrl +'stores' ;
    this.esbApiUrl = this.utilsService.apiUrl;
  }

  getStores(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/storeList", payload);
  }
  createStore(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/createStore", payload);
  } 
  createStoreESB(payload: any): Observable<any> {
    return this.http.post<any>(this.esbApiUrl + "/saveModel", payload);
  }
  getStoreById(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/storeDetails", payload);
  }
  
}
