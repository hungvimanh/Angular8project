import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { InLoginRoutingModule } from './in-login.routing';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    InLoginRoutingModule
  ]
})
export class InLoginModule { }
