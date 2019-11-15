import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { benchmark, subjectGroup } from './benchmark'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BenchmarkServiceService {

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  private _url_base = "https://localhost:5001/api/TF"
  constructor(private http: HttpClient) { } 
  
  getBenmarkTable(benchmark: benchmark): Observable<any>{
    return this.http.post(this._url_base + '/university-majors/list',JSON.stringify(benchmark),
    {observe: 'response', headers: this.headers})

  }

  getSubjectGroup( khoi: subjectGroup ):Observable<any>{
    return this.http.post(this._url_base + '/subject-group/list', JSON.stringify(khoi),
    {observe: 'response', headers: this.headers});
  }

  
}
