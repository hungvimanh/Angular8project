import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Wish, University, MajorOfUniversity, Province, District, Town, HighSchool } from './register';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  isOpenTab1 = false;
  
  isOpenTab2 = true;
  isOpenTab3 = false;
  isOpenTab4 = false;
  currentYear = "2019";
  wish = new Wish
  arrayWish = []
  public ind = 1;
  selectedValue = null;
  public universitys : University[];
  public majors : MajorOfUniversity[];
  // public subjectGroups : University[]
  public univerSelected: University;
  public majorSelected: MajorOfUniversity;
  public provinces : Province[];
  public districts : District[];
  public towns : Town[];
  public provinceSelected0:Province;
  public provinceSelected1:Province;
  public districSelected1: District;
  public townSelected1:Town;
  public provinceSelected2:Province;
  public highSchools : HighSchool[];
  constructor(private _httpClient: RegisterService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.wish = new Wish();
    this.wish.index = this.ind;
    this.arrayWish.push(this.wish)
  }
  getListUniver(){
    let uni = new University()
    this._httpClient.getUniversity(uni)
      .subscribe(
        (data)=>{
          this.universitys = data;
        }
      )
  }
  getMajorOfUniver(){
    if(this.univerSelected != null){
      let ab = new MajorOfUniversity();
      ab.universityId = this.univerSelected.id;
      ab.year = this.currentYear;
      this._httpClient.getMajorOfUniversity(ab)
        .subscribe(
          (data)=>{
            this.majors = data;
          }
        )
      console.log(this.univerSelected);
    }
  }
  getProvince(){
    
    let ac = new Province();
    this._httpClient.getProvince(ac)
      .subscribe(
        (data)=>{
          this.provinces = data;
        }
      )
  }
  getDistrict(){
    if(this.provinceSelected1.id != null){
      let ac = new District();
      ac.provinceId = this.provinceSelected1.id
      this._httpClient.getDistrict(ac)
      .subscribe(
        (data)=>{
          this.districts = data;
        }
      )
    }
    
  }
  getTown(){
    if(this.districSelected1.id != null){
      let ac = new Town();
      ac.districtId = this.districSelected1.id;
    this._httpClient.getTown(ac)
      .subscribe(
        (data)=>{
          this.towns = data;
        }
      )
    }
  }
  getHighSchool(){
    if(this.provinceSelected2.id != null){
      let ac = new HighSchool();
      ac.provinceId = this.provinceSelected2.id
      this._httpClient.getHighSchool(ac)
      .subscribe(
        (data)=>{
          this.highSchools = data;
        }
      )
    }
    
  }
  addWish(){
    let abc = new Wish();
    this.arrayWish.push(abc);
  }
  removeWish(i){
    this.arrayWish.splice(i,1);
  }
 

  
}
