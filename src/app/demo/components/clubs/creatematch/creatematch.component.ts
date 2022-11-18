import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
@Component({
  
  templateUrl: './creatematch.component.html',
  providers: [MessageService]
})
export class CreatematchComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage=''
  msgs: Message[] = [];
  
  constructor(private messageService:MessageService) { }

     
  ngOnInit(): void {
  
  }

}
