import { Injectable } from '@angular/core';
/*import {PRODUCTS} from './product.json';*/
import {Product} from './Product';
import {Observable,of,catchError,throwError,map} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import swal from 'sweetalert2';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlEndPoint:string="http://localhost:8080/api/products";
  private urlEndPointSerachNav="http://localhost:8080/api/loading";


  //init dependency injection
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private httpvar:HttpClient,private router:Router ) { }

  getProductos(page:number):Observable<any>{
    return this.httpvar.get(this.urlEndPoint+'/page/'+page).pipe(
      map((response:any)=>{
        return response;
      })

    );
    }

  create(product:Product):Observable<any>{
    return this.httpvar.post<any>(this.urlEndPoint,product,{headers:this.httpHeaders});
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

searchProductByName(name:any):Observable<Product[]>{
  return this.httpvar.get<Product[]>(`${this.urlEndPointSerachNav}/${name}`).pipe(
    catchError(e =>{
     swal.fire('No Encontrado',e.error.mensaje,'error');
        this.router.navigate(['index']);
      return throwError(e);
    })
  );
}





}
