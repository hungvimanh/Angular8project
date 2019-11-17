import { Component, OnInit } from '@angular/core';
// import { khoi } from './benchmark';
import { BenchmarkServiceService } from './benchmark-service.service';
import { subjectGroup, benchmark, AboutScore } from './benchmark';
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

  }

  aboutScore = this.fb.group (
    {
      benchmarkLow : ['',[Validators.required]],
      benchmarkHigh : ['',Validators.required],
      subjectGroupCode : [''],
      year : [''],
    }

  )
  get benchmarkLow(){
    return this.aboutScore.get("benchmarkLow");
  }
  get benchmarkHigh(){
    return this.aboutScore.get("benchmarkHigh");
  }
  get subjectGroupCode(){
    return this.aboutScore.get("subjectGroupCode");
  }
  get year(){
    return this.aboutScore.get("year");
  }

  years = [
    "2019","2018","2017","2016","2015"
  ]
  majorInAboutScore() {
    if (this.aboutScore.valid) {
      let bcd = new AboutScore();
      bcd.benchmarkLow = this.aboutScore.get('benchmarkLow').value;
      bcd.benchmarkHigh = this.aboutScore.get('benchmarkHigh').value;
      bcd.subjectGroupCode  = this.aboutScore.get('subjectGroupCode').value;
      bcd.year = this.aboutScore.get("year").value;
     this.benchmarkService.getBenmarkTable(bcd).subscribe(
       (data)=>{
         this.allRecords = data;
       }
     )
    }
    else {
       this.validateAllFields(this.aboutScore);
    }
  }

  validateAllFields(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach((field: string) => {
      const control = form.get(field);
      if (control instanceof FormArray) {
        this.validateAllFields(control);
      }
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }
}
