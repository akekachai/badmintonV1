import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateclubsModule } from './createclubs/createclubs.module';
import { CreatematchModule } from './creatematch/creatematch.module'; 

@NgModule({
  declarations: [
  
  
   
  ],
  imports: [
    CommonModule, 
    CreateclubsModule,
    CreatematchModule
  ]
})
export class ClubsModule { }
