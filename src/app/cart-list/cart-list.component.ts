import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  shoppingItems = ['M.2', 'SSD', 'RTX-3080'];

  constructor() {}

  ngOnInit(): void {}

  itemDeleted(item: any) {
    this.shoppingItems = this.shoppingItems.filter((i) => i !== item);
  }
}
