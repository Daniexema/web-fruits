import { Injectable } from '@angular/core';
/*import {PRODUCTS} from './product.json';*/
import {Product} from './Product';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

private urlEndPoint:string="http://localhost:8080/api/products";

//init dependency injection
  constructor(private httpvar:HttpClient) { }

  getProductos():Observable<Product[]>{
//return of(PRODUCTS);
  return this.httpvar.get<Product[]>(this.urlEndPoint);
    }
}
