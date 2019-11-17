import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Univer, UniverCreate } from './university';
@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private _url_base = "https://localhost:5001/api/TF"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { }
  getUniverTable(univer): Observable<Univer[]>{
    return this.http.post<Univer[]>(this._url_base + '/university/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getUniverSearch(univer): Observable<Univer[]>{
    return this.http.post<Univer[]>(this._url_base + '/university/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    
  }

  getUniverSort(univer): Observable<Univer[]>{
    return this.http.post<Univer[]>(this._url_base + '/university/list',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    }
  createUniver(univer): Observable<UniverCreate>{
    return this.http.post<UniverCreate>(this._url_base + '/ad/university/create',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    }
  

  errorHandler(error: HttpErrorResponse) {
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
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
