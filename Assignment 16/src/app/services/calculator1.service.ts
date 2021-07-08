import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Calculator1Service {
 addOperation(a:number,b:number)
 {
   return a+b;
 }
 subOperation(a:number,b:number)
 {
   return a-b;
 }
 mulOperation(a:number,b:number)
 {
   return a*b;
 }
 constructor(){}


}
