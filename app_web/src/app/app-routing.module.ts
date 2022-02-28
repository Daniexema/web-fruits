import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


/**Aqui se agregan los path de las páginas **/  
const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'my-cart', component: ShoppingCartComponent }
];

@NgModule({
  /**Aqui se agregan los componentes de las páginas **/  
  declarations: [HeaderComponent,
                 ShoppingCartComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HeaderComponent]
})
export class AppRoutingModule { 


}
