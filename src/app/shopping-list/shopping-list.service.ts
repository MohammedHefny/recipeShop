import { Subject } from 'rxjs';
import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new Subject<ingredient[]>()
  startingEdit = new Subject<number>()
  private ingredients:ingredient[] = [
    new ingredient ('Apples', 5),
    new ingredient ('Tomatos', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index]
  }

  addIngredients(ingredient: ingredient) {
this.ingredients.push(ingredient);
this.ingredientsChanged.next(this.ingredients.slice())
  }
 addIngredient(ingredients :ingredient[]) {
  //   for (let ingredient of ingredients) {
  //     this.addIngredients(ingredient);
  //   }
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
