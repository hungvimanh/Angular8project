import { Component, OnInit } from '@angular/core';
import { UniverDetail, UniverDelete, MajorDelete,Major } from './university-detail-admin';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityDetailAdminService } from './university-detail-admin.service';
import { async } from 'q';

@Component({
  selector: 'app-university-detail-admin',
  templateUrl: './university-detail-admin.component.html',
  styleUrls: ['./university-detail-admin.component.less']
})
export class UniversityDetailAdminComponent implements OnInit {
  isAdmin = false;
  showModalCreate = false;
  showModalUpdate = false;
  public id : string;
  public univer : UniverDetail;
  public idDelete : string;
  // public bcd : UniverDelete;
   constructor(private route: ActivatedRoute, private router: Router, private univerDetailService: UniversityDetailAdminService) { 
     this.route.queryParams
       .subscribe(params => {
         if(params ){
           this.id = params.id;
         }
       });
   }
 
   ngOnInit() {
     let abc =  new UniverDetail();
     abc.id =  this.id;
     this.univerDetailService.getUniverDetail(abc)
     .subscribe(
       (data)=>{
         this.univer = data
        //  console.log(this.univer)
       }
     )
   }

   deleteUniver(UniverId){
     let abc = new UniverDelete();
     abc.id = UniverId;
    this.univerDetailService.deleteUniver(abc)
      .subscribe(
        (data)=>{
          abc = data;
        }
      )
      this.router.navigate(['/in-login/university']);
  }
   
   updateMajor(major : Major){
     this.showModalUpdate = true;
   }
   createMajor(){

   }
   
   deleteMajor(majorId,subjectGroupId,year,index){
      
    // let abc = new MajorDelete()
    //   abc.universityId =  this.univer.id;
    //   abc.majorsId = majorId;
    //   abc.subjectGroupId = subjectGroupId;
    //   abc.year = year;
    //   this.univerDetailService.deleteMajor(abc)
    //     .subscribe(
    //       (data)=>{
    //         abc = data;
    //       }
    //     )
      this.univer.university_Majors.splice(index,1);
   }

   
 }