import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ViewRegistryProductComponent } from './components/view-registry-product/view-registry-product.component';
import { FilterPipe } from './components/pipes/filter.pipe';




const routes: Routes = [
  { path: '',redirectTo:"/index", pathMatch:"full"},
  { path: 'index',component:IndexComponent},
  { path: 'cart', component: ShoppingcartComponent },
  { path: 'products', component: ViewProductsComponent },
  { path: 'register', component: ViewRegistryProductComponent },
  { path: 'register/:id', component: ViewRegistryProductComponent }

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
    SearchBarComponent,
    ViewRegistryProductComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
    ],
    //Remeber inject el service from providers
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
