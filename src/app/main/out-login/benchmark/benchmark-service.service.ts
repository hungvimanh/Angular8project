import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { benchmark, subjectGroup } from './benchmark'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BenchmarkServiceService {

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  private _url_base = "https://localhost:5001/api/TF"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { } 
  
  getBenmarkTable(benmark): Observable<benchmark[]>{
    return this.http.post<benchmark[]>(this._url_base + '/university-majors/list',JSON.stringify(benmark),
    this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getSubjectGroup(khoi):Observable<subjectGroup[]>{
    return this.http.post<subjectGroup[]>(this._url_base + '/subject-group/list', JSON.stringify(khoi),
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
