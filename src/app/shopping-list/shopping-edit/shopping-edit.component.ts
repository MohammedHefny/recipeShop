import { Component, ElementRef, ViewChild, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm!: NgForm;
  subscription: Subscription = new Subscription;
  editMode: boolean = false;
  editedItemIndex!: number
  editedItem!: ingredient
  ngOnInit() {
  this.subscription = this.slService.startingEdit
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true
        this.editedItem = this.slService.getIngredient(index)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    )
  }

  // @ViewChild('nameInput', { static: true })
  // nameInputRef!: ElementRef;
  // @ViewChild('amountInput', { static: true })
  // amountInputRef!: ElementRef;
  constructor(private slService: ShoppingListService) { }
  // @Output() ingredientAdded = new EventEmitter<ingredient>()
  onSubmit(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value
    // const ingAmount = this.amountInputRef.nativeElement.value

    const value = form.value;
    const newIngredient = new ingredient(value.name,value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    }else {
      this.slService.addIngredients(newIngredient)
    }
    this.editMode = false;
form.reset()
    // this.ingredientAdded.emit(newIngredient);
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onClear();
  }

  ngOnDestroy() {
   this.subscription.unsubscribe()
  }
}
