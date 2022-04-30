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
import { ViewNavBarComponent } from './components/view-nav-bar/view-nav-bar.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '',redirectTo:"/index", pathMatch:"full"},
  { path: 'index',component:IndexComponent},
  { path: 'cart', component: ShoppingcartComponent },
  { path: 'products', component: ViewProductsComponent },
  { path: 'products/page/:page', component: ViewProductsComponent },
  { path: 'searching/:name', component: ViewNavBarComponent },
  { path: 'register', component: ViewRegistryProductComponent },
  { path: 'register/:id', component: ViewRegistryProductComponent },
  { path: 'login', component: LoginComponent }

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
    FilterPipe,
    ViewNavBarComponent,
    PaginatorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule
    ],
    //Remeber inject el service from providers
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
