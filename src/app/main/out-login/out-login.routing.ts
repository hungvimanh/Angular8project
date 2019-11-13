import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniverAdmistionComponent } from './univer-admistion/univer-admistion.component';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { UniverDetailComponent } from './univer-detail/univer-detail.component';

const routes: Routes = [
  {
    path: '', children: [
      {path: 'univer-admistion',component:UniverAdmistionComponent},
      { path: 'benchmark',component:BenchmarkComponent },
      { path: 'univer-detail',component:UniverDetailComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutLoginRoutingModule {
}
