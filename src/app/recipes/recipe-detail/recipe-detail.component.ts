import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
// @Input() recipe!: recipe;
recipe!: recipe;
id!:number
constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}
ngOnInit() {
  // const id = this.route.snapshot.params['id'];
  this.route.params.subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.gerRecipe(this.id)
    }
  )
}

onAddToShoppingList() {
this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}
onEditRecipe() {
this.router.navigate(['edit'], {relativeTo: this.route})
// this.router.navigate(['../',this.id, 'edit'], {relativeTo: this.route})
}
onDeleteRecipe() {
  this.recipeService.deleteRecipe(this.id)
  this.router.navigate(['/recipes'])
}
}
