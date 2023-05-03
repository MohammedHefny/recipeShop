import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
recipeChanged = new Subject<recipe[]>()

  private recipes: recipe[] = [
    new recipe('Tasty schnitzel',
     'A super Tasty schnitzel - just awesome',
      'assets/FB_IMG_1672749789922.jpg',
      [
        new ingredient('Meat',1),
        new ingredient('French Fries',20),
      ]
      ),
    new recipe('Big Fat Burger',
     'What Else You Need To Say',
      'assets/FB_IMG_1672749789922.jpg',
      [
        new ingredient('Buns',2),
        new ingredient('Meat',1),
      ]
      ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  gerRecipe(index:number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients : ingredient[]) {
    this.slService.addIngredient(ingredients)
  }
  addRecipe(recipe: recipe) {
    this.recipes.push(recipe)
    this.recipeChanged.next(this.recipes.slice())
  }
  UpdateRecipe(index: number, newRecipe: recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice())
  }

deleteRecipe(index: number) {
this.recipes.splice(index, 1)
this.recipeChanged.next(this.recipes.slice())
}

}
