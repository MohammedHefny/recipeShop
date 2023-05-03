import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<recipe>();
  recipes: recipe[] = []
  // recipes: recipe[] = [
  //   new recipe('A Test Recipe', 'This is simply a test', 'imgs/pexels-lisa-fotios-1161547.jpg'),
  //   new recipe('Another Test Recipe', 'This is simply a test', 'imgs/pexels-lisa-fotios-1161547.jpg'),
  // ];



constructor (private receipeService:RecipeService,private router: Router, private route: ActivatedRoute) {}
subscription: Subscription = new Subscription
ngOnInit () {
  this.subscription = this.receipeService.recipeChanged
  .subscribe(
    (recipes: recipe[])=> {
      this.recipes = recipes
    }
  )
this.recipes = this.receipeService.getRecipes();
}
// onRecipeSelected(recipe: recipe) {
//     this.recipeWasSelected.emit(recipe);
// }
onNewRecipe() {
this.router.navigate(['new'], {relativeTo: this.route})
}
ngOnDestroy() {
  this.subscription.unsubscribe()
}
}
