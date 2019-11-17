import { Component, OnInit } from '@angular/core';
import { Univer, UniName, UniCode, UniverCreate } from './university';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversityService } from './university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.less']
})
export class UniversityComponent implements OnInit {
  isAdmin = true;
  showModal = false;
  public univers : Univer[];
  public abc : UniverCreate;
  
  constructor(private _httpClient: UniversityService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    let ab = new Univer()
    this._httpClient.getUniverTable(ab)
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
  
  formCreateUniver = this.fb.group(
    {
      code: ['',Validators.required],
      name: ['',Validators.required],
      address: [''],
      website: ['']
    }
    
  )

  id : string;

  get nameCreate(){
    return this.formCreateUniver.get("name");
  }
  get codeCreate(){
    return this.formCreateUniver.get("code");
  }
  get addressCreate(){
    return this.formCreateUniver.get("address");
  }
  get websiteCreate(){
    return this.formCreateUniver.get("website");
  }
  get name(){
    return this.searchName.get("name");
  }
  get orderType(){
    return this.sortCode.get("orderType");
  }
  createUniver(){
    if (this.formCreateUniver.valid) {
      let bcd = new UniverCreate();
      bcd.name = this.formCreateUniver.get('name').value;
      bcd.code = this.formCreateUniver.get('code').value;
      bcd.address = this.formCreateUniver.get('address').value;
      bcd.website = this.formCreateUniver.get('website').value;

     this._httpClient.createUniver(bcd).subscribe(
       (data)=>{
         this.abc = data;
       }
      )
      console.log(this.abc);
      if(this.abc.errors.code != null){
        this.univers.push(this.abc);
        console.log(this.abc);
        this.showModal = false;
        //  alert("Tạo trường thành công!");
      }
      else{
       this.showModal = false;
        alert("Lỗi: "+bcd.errors.code);
      }
      
    }
    else {
       this.validateAllFields(this.formCreateUniver);
    }
    
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
    this.router.navigate(['/in-login/uni-detail-admin'], { queryParams: { id: UniverId } });
  }
  order_type = [
    { code: "0", name: "Sắp xếp từ A -> Z" },
    { code: "1", name: "Sắp xếp từ Z -> A" }
  ]
}
