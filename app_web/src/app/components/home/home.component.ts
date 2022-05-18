import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../login/App.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Demo';
  public greeting = {} as any;

  ngOnInit() {
  }

  constructor(private app: AppService, private http: HttpClient) {
    //http.get('http://localhost:8080').subscribe(data => this.greeting = data);
  }

 // authenticated() { return this.app.authenticated; }

}
