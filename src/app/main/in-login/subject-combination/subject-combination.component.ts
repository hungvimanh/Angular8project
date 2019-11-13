import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-combination',
  templateUrl: './subject-combination.component.html',
  styleUrls: ['./subject-combination.component.less']
})
export class SubjectCombinationComponent implements OnInit {
  showModal = false;
  constructor() { }

  ngOnInit() {
  }
  khois = [
    { code: "A00", subjects:"Toán , Lý, Hóa" },
    { code: "A01",subjects: "Toán, Lý , Anh" },
    { code: "B00",subjects:"Toán, Hóa, Sinh " },
    { code: "A00", subjects:"Toán , Lý, Hóa" },
    { code: "A01",subjects: "Toán, Lý , Anh" },
    { code: "B00",subjects:"Toán, Hóa, Sinh " },
    { code: "A00", subjects:"Toán , Lý, Hóa" },
    { code: "A01",subjects: "Toán, Lý , Anh" },
    { code: "B00",subjects:"Toán, Hóa, Sinh " },
    { code: "A00", subjects:"Toán , Lý, Hóa" },
    { code: "A01",subjects: "Toán, Lý , Anh" },
    { code: "B00",subjects:"Toán, Hóa, Sinh " },
    { code: "A00", subjects:"Toán , Lý, Hóa" },
    { code: "A01",subjects: "Toán, Lý , Anh" },
    { code: "B00",subjects:"Toán, Hóa, Sinh " },
    { code: "A00", subjects:"Toán , Lý, Hóa" },
    { code: "A01",subjects: "Toán, Lý , Anh" },
    { code: "B00",subjects:"Toán, Hóa, Sinh " },
    { code: "A00", subjects:"Toán , Lý, Hóa" },
    { code: "A01",subjects: "Toán, Lý , Anh" },
    { code: "B00",subjects:"Toán, Hóa, Sinh " },
    { code: "A00", subjects:"Toán , Lý, Hóa" },
    { code: "A01",subjects: "Toán, Lý , Anh" },
    { code: "B00",subjects:"Toán, Hóa, Sinh " },
  ]
}
