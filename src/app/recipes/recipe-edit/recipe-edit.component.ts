import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id!:number;
  editMode = false;
  recipeForm: FormGroup = new FormGroup({})
constructor (private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {}
ngOnInit(){
  this.route.params
  .subscribe(
    (params: Params)=> {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode)
      this.initForm();
    }
  )
}
onSubmit() {
  // const newRecipe = new recipe(this.recipeForm.value['name']
  // , this.recipeForm.value['description'],
  // this.recipeForm.value['imagePath'],
  // this.recipeForm.value['ingredients'],)
if(this.editMode) {
  this.recipeService.UpdateRecipe(this.id, this.recipeForm.value)
  // this.recipeService.UpdateRecipe(this.id, newRecipe)
}else {
// this.recipeService.addRecipe(newRecipe)
this.recipeService.addRecipe(this.recipeForm.value)
}
this.onCancel();
}
onAddIngredient() {
  (<FormArray>this.recipeForm.get('ingredients')).push(
    new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null , [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    })
  )
}

onDeleteIngredient(index: number) {
(<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
}

onCancel() {
this.router.navigate(['../'], {relativeTo: this.route})
}


get controls() {
  return(<FormArray>this.recipeForm.get('ingredients')).controls
}

private initForm() {
  let recpieName = '';
  let recpieImagePath = '';
  let recpieDescription = '';
  let recipeIngredients: any = new FormArray([]);

  if(this.editMode) {
  const recipe = this.recipeService.gerRecipe(this.id);
    recpieName = recipe.name;
    recpieImagePath = recipe.imagePath;
    recpieDescription = recipe.description;
    if (recipe['ingredients']) {
      for (let ingredient of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        );
      }
    }
  }
this.recipeForm = new FormGroup({
  'name' : new FormControl(recpieName, Validators.required),
  'imagePath' : new FormControl(recpieImagePath, Validators.required),
  'description' : new FormControl(recpieDescription, Validators.required),
  'ingredients' : recipeIngredients,
})
}
}
