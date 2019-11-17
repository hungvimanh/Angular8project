import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Major, MajorId } from './majors';

@Injectable({
  providedIn: 'root'
})
export class MajorsService {
  private _url_base = "https://localhost:5001/api/TF"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { }
  
  getMajorsTable(univer): Observable<Major[]>{
    return this.http.post<Major[]>(this._url_base + '/majors/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getMajorSearch(univer): Observable<Major[]>{
    return this.http.post<Major[]>(this._url_base + '/majors/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  deleteMajor(univer): Observable<MajorId>{
    return this.http.post<MajorId>(this._url_base + '/ad/majors/delete',JSON.stringify(univer),
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
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
