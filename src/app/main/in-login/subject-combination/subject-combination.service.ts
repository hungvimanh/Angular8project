import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {  SubjectGroups, SubjectName, SubjectId } from './subject-combination';

@Injectable({
  providedIn: 'root'
})
export class SubjectCombinationService {
  private _url_base = "https://localhost:5001/api/TF"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { }

  getSGTable(univer): Observable<SubjectGroups[]>{
    return this.http.post<SubjectGroups[]>(this._url_base + '/subject-group/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getSGSearch(univer): Observable<SubjectGroups[]>{
    return this.http.post<SubjectGroups[]>(this._url_base + '/subject-group/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  deleteSG(univer): Observable<SubjectId>{
    return this.http.post<SubjectId>(this._url_base + '/ad/subject-group/delete',JSON.stringify(univer),
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
