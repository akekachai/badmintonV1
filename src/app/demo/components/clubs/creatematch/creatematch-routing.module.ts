import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatematchComponent } from './creatematch.component';
const routes: Routes = [{ path: 'creatematch' , component: CreatematchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatematchRoutingModule { }
