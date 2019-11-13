import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.less']
})
export class ListStudentComponent implements OnInit {
  showModalCreate = true;
  constructor() { }

  ngOnInit() {
  }
  students = [
    { identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},
    { identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},
    { identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},{ identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},
    { identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},
    { identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},
    { identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},
    { identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},
    { identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},
    { identify: "001099018000",name:"Đinh Minh Khang",gender:"nam",dob:"11/23/1999",province:"Hà Nội",highSchool:"THPT Trần Đăng Ninh",status:"đã duyệt"},

  ]
}
