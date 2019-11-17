import { Component, OnInit } from '@angular/core';
import { ListStudentService } from './list-student.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Student, Indentify, StudentId } from './list-student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.less']
})
export class ListStudentComponent implements OnInit {
  showModalCreate = false;
  public students : Student[]
  constructor(private _httpClient: ListStudentService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    let stu = new Student
    this._httpClient.getListStudentTable(stu)
      .subscribe(
        (data)=>{
          this.students = data
        }
      )
  }
  search = this.fb.group (
    {
      identify: [''],
      name : [''],
      gender : [''],
      dob : [''],
      provinceName : [''],

      highSchoolName : [''],
      status : [''],
    }
  )
  filterSearch() {
    // alert("enter key down");
    if (this.search.valid) {
      let bcd = new Student();
      bcd.identify = this.search.get("identify").value;
      bcd.name = this.search.get('name').value;
      bcd.gender = this.search.get('gender').value;
      bcd.dob = this.search.get('dob').value;
      bcd.provinceName = this.search.get('provinceName').value;
      bcd.highSchoolName = this.search.get('highSchoolName').value;
      bcd.status = this.search.get('status').value;
       console.log(bcd)
     this._httpClient.getSearch(bcd)
      .subscribe(
        (data)=>{
          this.students =data;
        }
      )
    }
    else {
       this.validateAllFields(this.search);
    }
  }
  transferStatus(number: number){
    if(number == 0 ){
      return "chưa đăng ký"
    }
    else if( number == 1){
      return "chờ duyệt"
    }
    else if( number == 2 ){
      return "đã duyệt"
    }
    else {
      return "đã từ chối"
    }
  }
  transferDate(str: string){
    return str.substring(0,10);
  }
  deleteStudent(studentID,index){
    let abc = new StudentId()
    abc.id = studentID
    this._httpClient.deleteStudent(abc)
      .subscribe(
        (data)=>{
          abc = data;
        }
      )
      this.students.splice(index,1);
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
  statuss=[
    { value : 0, name: "chưa đăng ký" },
    { value : 1, name: "chờ duyệt" },
    { value : 2, name: "đã duyệt" },
    { value : 3, name: "đã từ chối" },
  ]
  genderss = [
    { value: true, abc: "nam" },
    { value: false, abc:"nữ" }
  ]
}
