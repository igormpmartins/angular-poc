import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

const routes: Routes = [
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'cart-list', component: CartListComponent },
  { path: 'simple-form', component: SimpleFormComponent },
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
