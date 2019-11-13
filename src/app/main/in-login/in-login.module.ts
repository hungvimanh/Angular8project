import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { InLoginRoutingModule } from './in-login.routing';
import { ProfileComponent } from './profile/profile.component';
import { ResultComponent } from './result/result.component';
import { FillResultComponent } from './fill-result/fill-result.component';
import { MajorsComponent } from './majors/majors.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { SubjectCombinationComponent } from './subject-combination/subject-combination.component';

@NgModule({
  declarations: [RegisterComponent, ProfileComponent, ResultComponent, FillResultComponent, MajorsComponent, ListStudentComponent, SubjectCombinationComponent],
  imports: [
    CommonModule,
    InLoginRoutingModule
  ]
})
export class InLoginModule { }
