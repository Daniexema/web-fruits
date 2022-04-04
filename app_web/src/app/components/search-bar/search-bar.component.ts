import { Component, OnInit } from '@angular/core';
import {Product} from '../view-card/product';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

 constructor() {}


  ngOnInit(): void {

  }

  pro=new Product;






}
