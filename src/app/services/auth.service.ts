import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'http://45.136.255.182:5003/api/Persons';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  login(userid: string,platform: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/authenticate',
      {
        userid,
        platform,
        password,
      },
      httpOptions
    );
  }

 
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

  refreshToken(token: string) {
    console.log('7');
    return this.http.post(AUTH_API + 'refresh-token', {
      refreshToken: token
    }, httpOptions);
  }
}
