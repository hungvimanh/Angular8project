import { Component, OnInit } from '@angular/core';
import { FillResultService } from './fill-result.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Student, Score } from './fill-result';
const validateScore: ValidatorFn = (control: AbstractControl) : { [key : string]:  any } | null => {
  if(/[+-]?([0-9]*[.])?[0-9]+/.test(control.value)){
    return null;
  }
  return {
    invalidScore: (control.value) + ' is not a value score',
  };
};
@Component({
  selector: 'app-fill-result',
  templateUrl: './fill-result.component.html',
  styleUrls: ['./fill-result.component.less']
})

export class FillResultComponent implements OnInit {
  public student :Student;
  public abc : Score;
  constructor(private _httpClient: FillResultService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
  }
  searchIdentify = this.fb.group (
    {
      identify: ['']
    }
  )
  formScore = this.fb.group (
    {
      maths: ['',validateScore],
      physics: ['',validateScore],
      literature: ['',validateScore],
      languages: ['',validateScore],
      history: ['',validateScore],
      geography: ['',validateScore],
      civicEducation: ['',validateScore],
      chemistry: ['',validateScore],
      biology:['',validateScore],
    }
  )
  filterSearchIdentify() {
    if (this.searchIdentify.valid) {
      let bcd = new Student();
      bcd.identify = this.searchIdentify.get('identify').value;
      
     this._httpClient.getStudentByIdentify(bcd)
     .subscribe(
       (data)=>{
         this.student = data;
       }
     )
    }
    else {
       this.validateAllFields(this.searchIdentify);
    }
  }
  transferDate(str: string){
    return str.substring(0,10);
  }
  sendScore(sudentId){
    if(this.formScore.valid){
      let bca = new Score();
      bca.id = sudentId;
      bca.maths = this.formScore.get("maths").value;
      bca.physics = this.formScore.get("physics").value;
      bca.chemistry = this.formScore.get("chemistry").value;
      bca.civicEducation = this.formScore.get("civicEducation").value;
      bca.history = this.formScore.get("history").value;
      bca.biology = this.formScore.get("biology").value;
      bca.languages = this.formScore.get("languages").value;
      bca.literature = this.formScore.get("literature").value;
      bca.geography = this.formScore.get("geography").value;

      if(bca.id != null && 
       bca.maths <=10 && bca.maths >= 0 &&
       bca.physics <=10 && bca.physics >= 0 &&
       bca.literature <=10 && bca.literature >= 0 &&
       bca.languages <=10 && bca.languages >= 0 &&
       bca.geography <=10 && bca.geography >= 0 &&
       bca.chemistry <=10 && bca.chemistry >= 0 &&
       bca.civicEducation <=10 && bca.civicEducation >= 0 &&
       bca.history <=10 && bca.history >= 0 &&
       bca.biology <=10 && bca.biology >= 0 
        )
        {
        this._httpClient.SubmitScore(bca)
        .subscribe(
          (data)=>{
            this.abc = data
          }
        )
      }
    }
    else{
      this.validateAllFields(this.formScore)
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
