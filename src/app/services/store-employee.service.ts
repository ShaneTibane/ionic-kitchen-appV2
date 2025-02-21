import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class StoreEmployeeService {
  private apiUrl  ='';  
  //private apiUrl = 'https://express-menu-item-microservice.onrender.com/menu-item';
  

  constructor(private http: HttpClient,private utilsService : UtilsService) {
    this.apiUrl = this.utilsService.apiUrl +'store-Employee' ;  
  }

  getStoreEmployeeListStoreById(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/storeEmployeeList", payload);
  }
  createStoreEmployee(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/createstoreEmployee", payload);
  }
  getStoreEmployeeById(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/storeEmployeeDetails", payload);
  }
}
  