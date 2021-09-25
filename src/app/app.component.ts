import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-poc';
  shoppingItems = ['M.2', 'SSD', 'RTX-3080'];

  itemDeleted(item: any) {
    this.shoppingItems = this.shoppingItems.filter((i) => i !== item);
  }
}
