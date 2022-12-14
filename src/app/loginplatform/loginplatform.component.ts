import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-loginplatform',
  templateUrl: './loginplatform.component.html',
  styleUrls: ['./loginplatform.component.scss']
})
export class LoginplatformComponent implements OnInit {

  userId = '';
  displayName ='';
  datesign ='';
  platform ='';
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage=''
  constructor(private authService:AuthService,private tokenStorage:StorageService,private route:Router,private activatedRoute: ActivatedRoute) 
  {
 
   }

  ngOnInit(): void {
    const now = new Date();
this.datesign = now.toLocaleString();
 
let _userid ='';
let _displayName='';
    this.activatedRoute.queryParams.subscribe(params => {
      _userid = params['userid']; 
      _displayName = params['displayname']; 
  });
 
    this.authService.login(_userid,'', 'line').subscribe( 
      data => {
        this.tokenStorage.saveToken('Bearer ' + data.jwtToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data.data);
        this.userId = data.data.userid;
        this.displayName = data.data.fullName;
        this.isLoginFailed = false;
        this.isLoggedIn = true;
 
      },
      err => {
       let _date = now.toISOString();
   
        this.authService.register(_userid,_displayName,'',_date ,'0',_date ,'0','a').subscribe( 
          data => {
            this.reloadPage();
     
          },
          err => {
            console.log('no data')
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          }
        );
    



      }
    );

  }

  reloadPage(): void {
    window.location.reload();
  }
}
