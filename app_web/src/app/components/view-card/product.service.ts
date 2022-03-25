import { Injectable } from '@angular/core';
/*import {PRODUCTS} from './product.json';*/
import {Product} from './Product';
import {Observable,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

private urlEndPoint:string="http://localhost:8080/api/products";


//init dependency injection
private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private httpvar:HttpClient) { }

  getProductos():Observable<Product[]>{
    return this.httpvar.get<Product[]>(this.urlEndPoint);
    }

  create(product:Product):Observable<Product>{
    return this.httpvar.post<Product>(this.urlEndPoint,product,{headers:this.httpHeaders});
  }

  getProductById(id:any):Observable<Product>{
    return this.httpvar.get<Product>(`${this.urlEndPoint}/${id}`);
  }

  upDateProduct(product:Product):Observable<Product>{
    return this.httpvar.put<Product>(`${this.urlEndPoint}/${product.id}`,product,{headers:this.httpHeaders});
  }
}
