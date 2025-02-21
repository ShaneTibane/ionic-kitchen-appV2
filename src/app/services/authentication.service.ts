import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class authenticationService {
  private apiUrl  ='';  
  //private apiUrl = 'https://express-menu-item-microservice.onrender.com/menu-item';
  

  constructor(private http: HttpClient,private utilsService : UtilsService) {
    this.apiUrl = this.utilsService.apiUrl +'authentication' ;  
  }

  createAuthentication(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/createAuthentication", payload);
  }
  
}
  