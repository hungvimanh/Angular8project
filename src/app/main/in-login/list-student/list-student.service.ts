import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Student, StudentId } from './list-student';

@Injectable({
  providedIn: 'root'
})
export class ListStudentService {
  private _url_base = "https://localhost:5001/api/TF"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { }
  
  getListStudentTable(univer): Observable<Student[]>{
    return this.http.post<Student[]>(this._url_base + '/ad/student/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getSearch(univer): Observable<Student[]>{
    return this.http.post<Student[]>(this._url_base + '/ad/student/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  // getIdentifySearch(univer): Observable<Student[]>{
  //   return this.http.post<Student[]>(this._url_base + '/ad/student/list',JSON.stringify(univer),
  //   this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.errorHandler)
  //     );
  // }
  deleteStudent(univer): Observable<StudentId>{
    return this.http.post<StudentId>(this._url_base + '/ad/student/delete',JSON.stringify(univer),
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
