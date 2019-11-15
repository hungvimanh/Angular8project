import { Component, OnInit } from '@angular/core';
// import { khoi } from './benchmark';
import { BenchmarkServiceService } from './benchmark-service.service';
import { subjectGroup, benchmark } from './benchmark';
import { FormGroup,FormArray,FormBuilder,FormControl, Validators } from '@angular/forms'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.less']
})
export class BenchmarkComponent implements OnInit {
  public subject_groups : subjectGroup[];
  public allRecords :benchmark[];
  constructor(private benchmarkService : BenchmarkServiceService, private fb : FormBuilder) { }

  

  ngOnInit() {
    let abc = new subjectGroup()
    abc.code = "T02"
    this.benchmarkService.getSubjectGroup(abc).subscribe(
      (data) =>{
        this.subject_groups = data;
      }
    )

    let bcd = new benchmark()
     this.benchmarkService.getBenmarkTable(bcd).subscribe(
       (data)=>{
         this.allRecords = data;
       }
     )
  //   const univer = new benchmark();

  //   this.benchmarkService.getBenmarkTable(univer)

  //     const post = new subjectGroup()
  //     post.code = 'T02';

  //     this.benchmarkService.getSubjectGroup(post)
  //     .subscribe(data => { this.subject_groups = data });


  // }
  
  // aboutScore = this.fb.group (
  //   {
  //     benchmarkLow : ['',[Validators.required]],
  //     benchmarkHigh : ['',Validators.required],
  //     year : ['',Validators.required]
  //   }

  // )
  }



  // khois = [
  //   "A00","A01","A02","B00","b00","b01","b02","C00"
  // ]
  // years = [
  //   "2019","2018","2017","2016","2015"
  // ]
  // univers = [
  //   { name:"Đại học Công Nghệ",major: "Công nghệ thông tin", khoi:"A01" ,benchmark:"25.5",note:"có note gì đâu" },
  //   { name:"Đại học Bách Khoa",major: "Điện tử viễn thông", khoi:"A01" ,benchmark:"24",note:"có note gì đâu" },
  //   { name:"Đại học FPT",major: "Vật lý kĩ thuật", khoi:"A01" ,benchmark:"22",note:"có note gì đâu" },
  //   { name:" Đại học Công Nghiệp ",major: "Công nghệ thông tin", khoi:"A01" ,benchmark:"25.5",note:"có note gì đâu" },
  //   { name:" Đại học Lâm Nghiệp ",major: "Điện tử viễn thông", khoi:"A01" ,benchmark:"24",note:"có note gì đâu" },
  //   { name:" Đại học Sư phạm Hà Nội ",major: "Vật lý kĩ thuật", khoi:"A01" ,benchmark:"22",note:"có note gì đâu" },
  //   { name:" Đại học Ngoại Ngữ ",major: "Công nghệ thông tin", khoi:"A01" ,benchmark:"25.5",note:"có note gì đâu" },
  //   { name:" Đại học Tự Nhiên ",major: "Điện tử viễn thông", khoi:"A01" ,benchmark:"24",note:"có note gì đâu" },
  //   { name:" Đại học Giáo Dục ",major: "Vật lý kĩ thuật", khoi:"A01" ,benchmark:"22",note:"có note gì đâu" },
  //   { name:" Đại học Kiến trúc ",major: "Công nghệ thông tin", khoi:"A01" ,benchmark:"25.5",note:"có note gì đâu" },
  //   { name:" Đại học Xây Dựng ",major: "Điện tử viễn thông", khoi:"A01" ,benchmark:"24",note:"có note gì đâu" },
  //   { name:" Đại học Thương Mại ",major: "Vật lý kĩ thuật", khoi:"A01" ,benchmark:"22",note:"có note gì đâu" },
  //   { name:" Đại học Tài Chính ",major: "Công nghệ thông tin", khoi:"A01" ,benchmark:"25.5",note:"có note gì đâu" },
  //   { name:" Đại học Thăng Long ",major: "Điện tử viễn thông", khoi:"A01" ,benchmark:"24",note:"có note gì đâu" },
  //   { name :" Đại học Phương Đông ", major: "Vật lý kĩ thuật", khoi:"A01" ,benchmark:"22",note:"có note gì đâu" },
  // ]
}
