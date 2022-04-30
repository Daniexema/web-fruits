import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BASE PROJECT JADASOFT';
  showHeader : boolean = true;

  constructor(private router : Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationStart){
          console.log('event.url'+event.url)
          this.showHeader = event.url === "/login" ? false : true
      }
    });
  }

}
