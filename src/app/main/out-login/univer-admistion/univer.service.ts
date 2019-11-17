import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { University } from './univer';

@Injectable({
  providedIn: 'root'
})
export class UniverService {
  private _url_base = "https://localhost:5001/api/TF"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { }
  getUniverTable(univer): Observable<University[]>{
    return this.http.post<University[]>(this._url_base + '/university/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getUniverSearch(univer): Observable<University[]>{
    return this.http.post<University[]>(this._url_base + '/university/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    
  }

  getUniverSort(univer): Observable<University[]>{
    return this.http.post<University[]>(this._url_base + '/university/list',JSON.stringify(univer),
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
