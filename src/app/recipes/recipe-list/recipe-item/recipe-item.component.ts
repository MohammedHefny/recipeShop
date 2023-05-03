import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: recipe;
  @Input() index!:number
// constructor(private recipeService: RecipeService) {}
  ngOnInit() {

  }

  // @Output() recipeSelected = new EventEmitter<void>();
  // onSelected() {
    // this.recipeSelected.emit();
// this.recipeService.recipeSelected.emit(this.recipe)
  // }

}
