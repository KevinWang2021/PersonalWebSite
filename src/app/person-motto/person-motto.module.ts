import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonMottoRoutingModule } from './person-motto-routing.module';
import { WorkStyleComponent } from './work-style/work-style.component';


@NgModule({
  declarations: [WorkStyleComponent],
  imports: [
    CommonModule,
    PersonMottoRoutingModule
  ]
})
export class PersonMottoModule { }
