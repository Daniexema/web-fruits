import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

//inyectamos los datos hijos para que se vayan los datos al padre
@Input() paginador:any;



paginas : number[];

desde:number;
hasta:number;

  constructor() {}

  ngOnInit():void{
    console.log("Probando los datos si estan llegando al init "+this.paginador.totalPages+"<==>");
      this.initPaginador();
  }

ngOnChanges(changes:SimpleChanges){

  let paginadorActualizado=changes['paginador'];

  if(paginadorActualizado.previousValue){
      this.initPaginador();
  }
}


private initPaginador():void{

  this.desde=Math.min(Math.max(1,this.paginador.number-4),this.paginador.totalPages-5);
  console.log("DESDE =====>"+this.desde);
  this.hasta=Math.max(Math.min(this.paginador.totalPages,this.paginador.number+4),6);
  console.log("HASTA =====>"+this.hasta);
  if(this.paginador.totalPages>5){
    this.paginas= new Array(this.desde-this.hasta +1).fill(0).map( (_valor,indice) => indice + this.desde);
    console.log("ENTRANDO IF TRUE =====>"+this.paginador.totalPages);
  }else{
    this.paginas= new Array(this.paginador.totalPages).fill(0).map( (_valor,indice) => indice + 1);
    console.log("ENTRANDO IF FALSE =====>"+this.paginador.totalPages);
  }
}


}
