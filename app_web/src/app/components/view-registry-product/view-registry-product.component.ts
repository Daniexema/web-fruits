import { Component, OnInit } from '@angular/core';
import {Product} from '../view-card/product';
import {ProductService} from '../view-card/product.service';
import {Router,ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-registry-product',
  templateUrl: './view-registry-product.component.html',
  styleUrls: ['./view-registry-product.component.css']
})

export class ViewRegistryProductComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) {}

  public prod:any={title:"Name",des:"Decription",im:"Imagen",pri:"Price",exi:"Exist"}

  public product:Product = new Product();


  ngOnInit(): void {
    this.cargarProducto();
  }

  public create(): void{
//pasamos el producto del formulario que estamos recibiendo este metodo lo encontramos en product.service de la carpeta view-card
this.productService.create(this.product).subscribe(
  response => {
    this.router.navigate(['/products'])
    swal.fire('New Product',`Product ${response.name} success check out on list products`,'success');
  }
);
  }

cargarProducto():void{
this.activatedRoute.params.subscribe(params=>{
    let id = params['id'];
        if(id){
          this.productService.getProductById(id).subscribe((varProduct)=>this.product=varProduct);
        }
    })

  }
actualizarProducto():void{
  this.productService.upDateProduct(this.product).subscribe(
    productResponse => {
      this.router.navigate(['/products']);
      swal.fire('New Product',`Product ${productResponse.name} update check out on list products`,'success');
    }
  );
}

}
