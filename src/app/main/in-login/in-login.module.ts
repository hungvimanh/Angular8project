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
import { UniversityComponent } from './university/university.component';
import { UniversityDetailAdminComponent } from './university-detail-admin/university-detail-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { NgSelectModule } from '@ng-select/ng-select';

// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    RegisterComponent,
    ProfileComponent, 
    ResultComponent, 
    FillResultComponent,
    MajorsComponent,
    ListStudentComponent,
    SubjectCombinationComponent,
    UniversityComponent,
    UniversityDetailAdminComponent,
    
        ],
  imports: [
    CommonModule,
    InLoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
    // NzSelectModule,
    // NgZorroAntdModule,
  ]
})
export class InLoginModule { }
