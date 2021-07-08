import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseUrl:any='assets/Web.json'

  constructor(private http:HttpClient) { }
  getCoursesInfo():Observable<any>{
    return this.http.get(this.baseUrl)
}
}
