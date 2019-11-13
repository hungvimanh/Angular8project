import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-univer-admistion',
  templateUrl: './univer-admistion.component.html',
  styleUrls: ['./univer-admistion.component.less']
})
export class UniverAdmistionComponent implements OnInit {
  isAdmin = false;
  showModal = false;
  constructor() { }

  ngOnInit() {
  }
  univers = [
    { code : "123", name: "Đại học Công Nghệ" },
    { code : "232", name: "Đại học Ngoại Ngữ" },
    { code : "123", name: "Đại học Luật" },
    { code : "123", name: "Đại học Kinh Tế" },
    { code : "123", name: "Đại học Giáo Dục" },
    { code : "123", name: "Đại học Công Nghệ" },
    { code : "232", name: "Đại học Ngoại Ngữ" },
    { code : "123", name: "Đại học Luật" },
    { code : "123", name: "Đại học Kinh Tế" },
    { code : "316", name: "Đại học Giáo Dục" },
    { code : "316", name: "Đại học Công Nghệ" },
    { code : "232", name: "Đại học Ngoại Ngữ" },
    { code : "316", name: "Đại học Luật" },
    { code : "316", name: "Đại học Kinh Tế" },
    { code : "316", name: "Đại học Giáo Dục" },
    { code : "316", name: "Đại học Công Nghệ" },
    { code : "232", name: "Đại học Ngoại Ngữ" },
    { code : "316", name: "Đại học Luật" },
    { code : "316", name: "Đại học Kinh Tế" },
    { code : "316", name: "Đại học Giáo Dục" },
    { code : "316", name: "Đại học Công Nghệ" },
    { code : "232", name: "Đại học Ngoại Ngữ" },
    { code : "316", name: "Đại học Luật" },
    { code : "316", name: "Đại học Kinh Tế" },
    { code : "316", name: "Đại học Giáo Dục" },
    { code : "316", name: "Đại học Công Nghệ" },
    { code : "232", name: "Đại học Ngoại Ngữ" },
    { code : "316", name: "Đại học Luật" },
    { code : "316", name: "Đại học Kinh Tế" },
    { code : "316", name: "Đại học Giáo Dục" },
  ]
}
