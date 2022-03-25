import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

 constructor(private route:Router) {}


  ngOnInit(): void {
  }

  public filterNav:any='';
  public navBar:any={title:"Buscar"}


  showVar(event:any){
   this.route.navigate(['/products']); // navigate to other page
  }


  navBarVal(event:any){
   return event;
  }



}
