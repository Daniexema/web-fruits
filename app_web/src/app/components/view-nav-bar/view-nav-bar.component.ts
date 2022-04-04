import { Component, OnInit } from '@angular/core';
import {Product} from '../view-card/product';
import {ProductService} from '../view-card/product.service';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-nav-bar',
  templateUrl: './view-nav-bar.component.html',
  styleUrls: ['./view-nav-bar.component.css']
})
export class ViewNavBarComponent implements OnInit {

  products : Product[];
    pro : Product;
  constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.findNamePoducts();
  }

  findNamePoducts():void{
    this.activatedRoute.params.subscribe(params=>{
      let name = params['name'];
      console.log(name);
      if(name){
        this.productService.searchProductByName(name).subscribe((varProd)=>this.products=varProd);
        console.log(this.products);
      }
    });
  }

}
