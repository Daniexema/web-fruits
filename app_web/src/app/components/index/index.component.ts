import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from 'src/app/service/service-test.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private service : ServiceTestService 
  ) { }

  ngOnInit() {
    //this.getDataRequest();
  }

  getDataRequest(){
      this.service.getDataRequest$().subscribe(
        data => {
          alert(JSON.stringify(data));
        },
        err => {
          alert("Error en la petición HTTP");
        }
      )
  }
}
