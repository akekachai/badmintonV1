import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CreateclubsRoutingModule } from './createclubs-routing.module';
import { CreateclubsComponent } from './createclubs.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [CreateclubsComponent],
  imports: [
    ButtonModule,
    InputTextModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    CommonModule,
    CreateclubsRoutingModule
  ],
})
export class CreateclubsModule {}
