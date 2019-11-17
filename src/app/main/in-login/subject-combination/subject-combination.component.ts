import { Component, OnInit } from '@angular/core';
import { SubjectGroups, SubjectName, SubjectId } from './subject-combination';
import { SubjectCombinationService } from './subject-combination.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-combination',
  templateUrl: './subject-combination.component.html',
  styleUrls: ['./subject-combination.component.less']
})
export class SubjectCombinationComponent implements OnInit {
  showModal = false;
  public khois : SubjectGroups[];
  constructor(private _httpClient: SubjectCombinationService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    let sg = new SubjectGroups()
    this._httpClient.getSGTable(sg)
      .subscribe(
        (data)=>{
          this.khois = data
        }
      )
  }
  searchCode = this.fb.group (
    {
      code: ['']
    }
  )
  filterSearchCode() {
    if (this.searchCode.valid) {
      let bcd = new SubjectName();
      bcd.code = this.searchCode.get('code').value;
      
     this._httpClient.getSGSearch(bcd).subscribe(
       (data)=>{
         this.khois = data;
       }
     )
    }
    else {
       this.validateAllFields(this.searchCode);
    }
  }
  deleteSG(index,sgId){
    let abc = new SubjectId()
    abc.id = sgId
    this._httpClient.deleteSG(abc)
      .subscribe(
        (data)=>{
          abc = data;
        }
      )
      this.khois.splice(index,1);
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
