import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UniverDetail } from '@app/main/out-login/univer-detail/univer-detail';
import { retry, catchError } from 'rxjs/operators';
import { University, MajorOfUniversity, Province, District, Town, HighSchool } from './register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private _url_base = "https://localhost:5001/api/TF"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { }

  getUniversity(univer): Observable<University[]>{
    return this.http.post<University[]>(this._url_base + '/university/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getMajorOfUniversity(univer): Observable<MajorOfUniversity[]>{
    return this.http.post<MajorOfUniversity[]>(this._url_base + '/university-majors/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getProvince(univer): Observable<Province[]>{
    return this.http.post<Province[]>(this._url_base + '/province/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getDistrict(univer): Observable<District[]>{
    return this.http.post<District[]>(this._url_base + '/district/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getTown(univer): Observable<Town[]>{
    return this.http.post<Town[]>(this._url_base + '/town/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getHighSchool(univer): Observable<HighSchool[]>{
    return this.http.post<HighSchool[]>(this._url_base + '/high-school/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // console.log(errorMessage);
    return throwError(errorMessage);
  }
}
