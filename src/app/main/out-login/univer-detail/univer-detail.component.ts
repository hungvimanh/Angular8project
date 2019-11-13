import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-univer-detail',
  templateUrl: './univer-detail.component.html',
  styleUrls: ['./univer-detail.component.less']
})
export class UniverDetailComponent implements OnInit {
 isAdmin = true;
 showModalCreate = false;
 showModalUpdate = false;
  constructor() { }

  ngOnInit() {
  }
  univer = { 
    code:"QHI", 
    name: "Đại học Công Nghệ",
    website: "uet.vnu.edu.vn",
    address: "144 Xuân thủy Cầu Giấy Hà Nội" 
  }
  majors = [
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
  ]
  updateMajor(){
    this.showModalUpdate = true;
  }
}
