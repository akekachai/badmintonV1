import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateclubsRoutingModule } from './createclubs-routing.module';
import { CreateclubsComponent } from './createclubs.component';

@NgModule({
  declarations: [CreateclubsComponent],
  imports: [
    CommonModule,
    CreateclubsRoutingModule
  ]
})
export class CreateclubsModule { }
