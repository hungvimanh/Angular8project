import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.less']
})
export class MajorsComponent implements OnInit {
  showModal = false;
  constructor() { }

  ngOnInit() {
  }
  majors = [
    { majorCode: "CN1",majorName: "Công nghệ thông tin" },
    { majorCode: "DT1",majorName: "Điện tử viễn thông"},
    { majorCode: "CN1",majorName: "Vật lý kĩ thuật" },
    { majorCode: "CN1",majorName: "Công nghệ thông tin" },
    { majorCode: "DT1",majorName: "Điện tử viễn thông"},
    { majorCode: "CN1",majorName: "Vật lý kĩ thuật" },
    { majorCode: "CN1",majorName: "Công nghệ thông tin" },
    { majorCode: "DT1",majorName: "Điện tử viễn thông"},
    { majorCode: "CN1",majorName: "Vật lý kĩ thuật" },
    { majorCode: "CN1",majorName: "Công nghệ thông tin" },
    { majorCode: "DT1",majorName: "Điện tử viễn thông"},
    { majorCode: "CN1",majorName: "Vật lý kĩ thuật" },
    { majorCode: "CN1",majorName: "Công nghệ thông tin" },
    { majorCode: "DT1",majorName: "Điện tử viễn thông"},
    { majorCode: "CN1",majorName: "Vật lý kĩ thuật" },
    { majorCode: "CN1",majorName: "Công nghệ thông tin" },
    { majorCode: "DT1",majorName: "Điện tử viễn thông"},
    { majorCode: "CN1",majorName: "Vật lý kĩ thuật" },
    { majorCode: "CN1",majorName: "Công nghệ thông tin" },
    { majorCode: "DT1",majorName: "Điện tử viễn thông"},
    { majorCode: "CN1",majorName: "Vật lý kĩ thuật" },
    { majorCode: "CN1",majorName: "Công nghệ thông tin" },
    { majorCode: "DT1",majorName: "Điện tử viễn thông"},
    { majorCode: "CN1",majorName: "Vật lý kĩ thuật" },
  ]
}
