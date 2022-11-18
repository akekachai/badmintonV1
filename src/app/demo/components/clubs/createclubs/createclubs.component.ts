import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { ClubService } from 'src/app/services/club.service';

@Component({
 
  templateUrl: './createclubs.component.html' ,
  providers: [MessageService]
})
export class CreateclubsComponent implements OnInit {


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage=''
  msgs: Message[] = [];
 
  constructor(private service: MessageService, private clubService:ClubService) { }

  ngOnInit(): void {
  }

  createTeam(nameTeam:string) {

    if( nameTeam === '')
    {
      this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
return;

    }
    const now = new Date();
    let _date = now.toISOString();

    this.clubService.createclub('aaa',nameTeam,'',0,_date,'0',_date,'0','a').subscribe( 
      data => {
        
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });

 
      },
      err => {
        console.log('no data')
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );



  
  }

}
