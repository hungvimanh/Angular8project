import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniverAdmistionComponent } from './univer-admistion/univer-admistion.component';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { OutLoginRoutingModule } from './out-login.routing';

@NgModule({
  declarations: [
    UniverAdmistionComponent,
    BenchmarkComponent
  ],
  imports: [
    CommonModule,
    OutLoginRoutingModule
  ]
})
export class OutLoginModule { }
