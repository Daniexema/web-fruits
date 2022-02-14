import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceTest } from '../interface/interface-testVO';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

headers = new HttpHeaders().append("accept","*/*").append("Content-Type","application/json");

constructor(private http: HttpClient) { }

getDataRequest$():Observable <InterfaceTest> {
  return this.http.get<InterfaceTest>('https://jsonplaceholder.typicode.com/photos',{headers:this.headers});
}

}
