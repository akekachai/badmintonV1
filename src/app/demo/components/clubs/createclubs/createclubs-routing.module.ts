import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateclubsComponent } from './createclubs.component';
const routes: Routes = [{ path:'create', component: CreateclubsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateclubsRoutingModule { }
