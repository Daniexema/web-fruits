import { Component, OnInit } from '@angular/core';
import {Product} from './Product';
import{ ProductService } from './product.service';




@Component({
  selector:'app-view-card',
  templateUrl: './viewcard.component.html'
})
export class ViewcardComponent implements OnInit{

constructor(private productService:ProductService){}

products : Product[];
//initial injection dependency from service

filterNav='';

public navBar:any={title:"Buscar"}

ngOnInit(){
  this.productService.getProductos().subscribe(
    productPassParameter => this.products=productPassParameter
  );
}
}
