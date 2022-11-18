import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatematchRoutingModule } from './creatematch-routing.module';
import { CreatematchComponent } from './creatematch.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
@NgModule({
  declarations: [
    CreatematchComponent
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    CalendarModule,
    InputNumberModule,
    CommonModule,
    CreatematchRoutingModule
  ]
})
export class CreatematchModule { }
