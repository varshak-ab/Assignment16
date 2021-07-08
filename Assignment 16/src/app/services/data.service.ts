import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  Customers:any=[]
  private behaviorSubj = new BehaviorSubject(this.Customers)
  currentMsg = this.behaviorSubj.asObservable()
  changeData(data:any){
    console.log(data)
    this.behaviorSubj.value.push(data)
  }
}
