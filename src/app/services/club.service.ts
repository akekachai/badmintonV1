import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_KEY = window.sessionStorage.getItem('auth-token');
const API_URL = 'http://45.136.255.182:5003/api/clubs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `${TOKEN_KEY}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  constructor(private http: HttpClient) {}

  createclub(
    clubid: string,
    displayname: string,
    pathpicture: string,
    ownerid: number,
    createdate: string,
    createuserid: string,
    updatedate: string,
    updateuserid: string,
    activeflag: string
  ): Observable<any> {
    return this.http.post(
      API_URL + '',
      {
        clubid,
        displayname,
        pathpicture,
        ownerid,
        createdate,
        createuserid,
        updatedate,
        updateuserid,
        activeflag,
      },
      httpOptions
    );
  }
}
