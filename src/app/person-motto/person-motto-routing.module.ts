import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkStyleComponent} from './work-style/work-style.component';
const routes: Routes = [
  {path:'',component:WorkStyleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonMottoRoutingModule { }
