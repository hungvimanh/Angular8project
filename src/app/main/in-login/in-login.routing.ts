import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultComponent } from './result/result.component';
import { FillResultComponent } from './fill-result/fill-result.component';
import { MajorsComponent } from './majors/majors.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { SubjectCombinationComponent } from './subject-combination/subject-combination.component';

const routes: Routes = [
  {
    path: '', children: [
        {path:'register',component:RegisterComponent},
        { path: 'profile',component:ProfileComponent },
        { path: 'result',component:ResultComponent },
        { path: 'fill-result',component:FillResultComponent},
        { path: 'majors',component:MajorsComponent },
        { path: 'list-student',component: ListStudentComponent },
        { path: 'subject-combination',component: SubjectCombinationComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InLoginRoutingModule {
}