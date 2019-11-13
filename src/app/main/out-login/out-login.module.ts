import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniverAdmistionComponent } from './univer-admistion/univer-admistion.component';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { OutLoginRoutingModule } from './out-login.routing';
import { UniverDetailComponent } from './univer-detail/univer-detail.component';

@NgModule({
  declarations: [
    UniverAdmistionComponent,
    BenchmarkComponent,
    UniverDetailComponent
  ],
  imports: [
    CommonModule,
    OutLoginRoutingModule
  ]
})
export class OutLoginModule { }
