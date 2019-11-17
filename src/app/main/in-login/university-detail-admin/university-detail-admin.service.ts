import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { UniverDetail, UniverDelete, MajorDelete } from './university-detail-admin';

@Injectable({
  providedIn: 'root'
})
export class UniversityDetailAdminService {
  private _url_base = "https://localhost:5001/api/TF"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { }

  getUniverDetail(univer): Observable<UniverDetail>{
    return this.http.post<UniverDetail>(this._url_base + '/university/get',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  deleteUniver(univer): Observable<UniverDelete>{
    return this.http.post<UniverDelete>(this._url_base + '/ad/university/delete',JSON.stringify(univer),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
    }
    deleteMajor(univer): Observable<MajorDelete>{
      return this.http.post<MajorDelete>(this._url_base + '/ad/university-majors/delete',JSON.stringify(univer),
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
