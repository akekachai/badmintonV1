import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_KEY = window.sessionStorage.getItem('auth-token');
 
const USER_KEY = window.sessionStorage.getItem('auth-user');
const USER_CODE ='';
const API_URL = 'http://45.136.255.182:5003/api/Persons';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': `${TOKEN_KEY}` }),
 

};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  getUserBoard(): Observable<any> {
    console.log(TOKEN_KEY);
    return this.http.get(API_URL, httpOptions);
  }

  getUserCode(){
    return USER_KEY ;
  }
}
