import { Component, OnInit } from '@angular/core';
import {Product} from './Product';
import{ ProductService } from './product.service';
import{ ActivatedRoute } from '@angular/router';




@Component({
  selector:'app-view-card',
  templateUrl: './viewcard.component.html'
})
export class ViewcardComponent implements OnInit{

constructor(private productService:ProductService, private route:ActivatedRoute){}

products : Product[];
paginador:any;

filterNav='';

public navBar:any={title:"Buscar"}

ngOnInit(){

  this.route.paramMap.subscribe(params=>{

    let page:number = +params.get('page');
    console.log("Entrando al menor al paramaMap de recibido de parametros"+ page);
    if(!page){
      page=0;
    }

    this.productService.getProductos(page).subscribe(
      response => {

        this.paginador=response;
        this.products=response.content as Product[];
        console.log("Probando los datos si estan llegando"+this.paginador.totalPages+"page ==>"+page);

      });
  });

}
}
