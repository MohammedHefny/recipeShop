import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients:ingredient[] = [];
// private igChangeSub: Subscription = new Subscription
private subscription: Subscription = new Subscription
// ingredients:ingredient[] = [
//   new ingredient ('Apples', 5),
//   new ingredient ('Tomatos', 10),
// ];

  constructor (private slService: ShoppingListService) {}
  ngOnInit () {
this.ingredients = this.slService.getIngredients();
this.subscription  = this.slService.ingredientsChanged.subscribe(
  (ingredients: ingredient[]) =>{
    this.ingredients = ingredients;
  }
)
  }
  onEditItem(index: number) {
    this.slService.startingEdit.next(index);
  }
ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}
