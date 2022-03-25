import { Injectable } from '@angular/core';
/*import {PRODUCTS} from './product.json';*/
import {Product} from './Product';
import {Observable,of,catchError,throwError} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import swal from 'sweetalert2';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlEndPoint:string="http://localhost:8080/api/products";


  //init dependency injection
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private httpvar:HttpClient,private router:Router ) { }

  getProductos():Observable<Product[]>{
    return this.httpvar.get<Product[]>(this.urlEndPoint);
    }

  create(product:Product):Observable<Product>{
    return this.httpvar.post<Product>(this.urlEndPoint,product,{headers:this.httpHeaders});
  }

  getProductById(id:any):Observable<Product>{
    return this.httpvar.get<Product>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
          swal.fire('Error al editar',e.error.mensaje,'error');
          this.router.navigate(['/products']);
          return throwError(e);
      })
    );
  }

  upDateProduct(product:Product):Observable<Product>{
    return this.httpvar.put<Product>(`${this.urlEndPoint}/${product.id}`,product,{headers:this.httpHeaders});
  }
}
