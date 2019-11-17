import { Component, OnInit } from '@angular/core';
import { University, UniName, UniCode, UniId } from './univer';
import { UniverService } from './univer.service';
import { FormGroup,FormArray,FormBuilder,FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-univer-admistion',
  templateUrl: './univer-admistion.component.html',
  styleUrls: ['./univer-admistion.component.less']
})
export class UniverAdmistionComponent implements OnInit {
  isAdmin = false;
  showModal = false;
  public univers : University[];
  constructor(private _httpClient: UniverService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    let abc = new University()
    this._httpClient.getUniverTable(abc)
      .subscribe(
        (data)=>{
          this.univers = data
        }
      )
  }

  searchName = this.fb.group (
    {
      name: ['']
    }
  )
  sortCode = this.fb.group (
    {
      oderType: ['']
    }
  )
  
  id : string;

  get name(){
    return this.searchName.get("name");
  }
  get orderType(){
    return this.sortCode.get("orderType");
  }
  filterSearchName() {
    if (this.searchName.valid) {
      let bcd = new UniName();
      bcd.name = this.searchName.get('name').value;
      
     this._httpClient.getUniverSearch(bcd).subscribe(
       (data)=>{
         this.univers = data;
       }
     )
    }
    else {
       this.validateAllFields(this.searchName);
    }
  }
  filterSortCode() {
    if (this.sortCode.valid) {
      let bcd = new UniCode();
      bcd.orderType = this.sortCode.get('oderType').value;
      
     this._httpClient.getUniverSort(bcd).subscribe(
       (data)=>{
         this.univers = data;
       }
     )
    }
    else {
       this.validateAllFields(this.sortCode);
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
  toDetail(UniverId?: string) {
    this.router.navigate(['/out-login/univer-detail'], { queryParams: { id: UniverId } });
  }
  order_type = [
    { code: "0", name: "Sắp xếp từ A -> Z" },
    { code: "1", name: "Sắp xếp từ Z -> A" }
  ]
}
