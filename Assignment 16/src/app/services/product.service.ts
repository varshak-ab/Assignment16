import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl:any='assets/Product.json'
  constructor(private http:HttpClient) { }
  getProductsInfo():Observable<any>{
    return this.http.get(this.baseUrl)
    // [{
    //   "productid":1, "productname":"Mobile","productprice":10000,"productdes":"Mobiles","productimg":"assets/images/mobile.jpg"
    // },
    // {
    //   "productid":2, "productname":"Table","productprice":15000,"productdes":"Tables","productimg":"assets/images/table.jpg"},
    //   {
    //   "productid":3, "productname":"Chocolate","productprice":200,"productdes":"Chocolates","productimg":"assets/images/choco.jpg"},
    //   {
    //     "productid":4, "productname":"Laptop","productprice":45000,"productdes":"Hp","productimg":"assets/images/laptop.jpg"},
    //     {
    //       "productid":5, "productname":"Tv","productprice":50000,"productdes":"Tv","productimg":"assets/images/tv.jpg"}
    //     ]




}
}

