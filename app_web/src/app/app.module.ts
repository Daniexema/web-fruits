import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import {ViewcardComponent} from './components/view-card/viewcard.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import  {HeaderComponent} from './components/header/header.component';
import {ProductService} from './components/view-card/product.service';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


const routes: Routes = [
  { path: '',redirectTo:"/index", pathMatch:"full"},
  { path: 'index',component:IndexComponent},
  { path: 'cart', component: ShoppingcartComponent },
  { path: 'products', component: ViewProductsComponent }
];
//*Material-UI
//*@Angular-Material

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    ViewcardComponent,
    ShoppingcartComponent,
    ViewProductsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    ],
    //Remeber inject el service from providers
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
