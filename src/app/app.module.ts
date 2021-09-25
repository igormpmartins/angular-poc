import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartListComponent } from './cart-list/cart-list.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    CartListComponent,
    SimpleFormComponent,
  ],
  imports: [ReactiveFormsModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
