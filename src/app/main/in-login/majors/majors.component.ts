import { Component, OnInit } from '@angular/core';
import { Major, MajorName, MajorId } from './majors';
import { MajorsService } from './majors.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.less']
})
export class MajorsComponent implements OnInit {
  showModal = false;
  public majors : Major[];
  constructor(private _httpClient: MajorsService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    let major = new Major
    this._httpClient.getMajorsTable(major)
      .subscribe(
        (data)=>{
          this.majors = data
        }
      )
  }
  searchName = this.fb.group (
    {
      name: ['']
    }
  )
  filterSearchName() {
    if (this.searchName.valid) {
      let bcd = new MajorName();
      bcd.name = this.searchName.get('name').value;
      
     this._httpClient.getMajorSearch(bcd).subscribe(
       (data)=>{
         this.majors = data;
       }
     )
    }
    else {
       this.validateAllFields(this.searchName);
    }
  }
  deleteMajor(majorId,index){
    let abc = new MajorId()
    abc.id = majorId
    this._httpClient.deleteMajor(abc)
      .subscribe(
        (data)=>{
          abc = data;
        }
      )
      this.majors.splice(index,1);
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
