import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  baseUrl:any='assets/Java.json'

  constructor(private http:HttpClient) { }
  getCoursesInfo():Observable<any>{
    return this.http.get(this.baseUrl)
}
}

