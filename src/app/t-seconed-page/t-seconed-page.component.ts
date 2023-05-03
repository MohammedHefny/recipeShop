import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-t-seconed-page',
  templateUrl: './t-seconed-page.component.html',
  styleUrls: ['./t-seconed-page.component.scss']
})
export class TSeconedPageComponent {
SeconedIng: ingredient[] = [
    new ingredient ('Apples', 5),
    new ingredient ('Tomatos', 10),
]
  @ViewChild('nameInput')
  nameInputRef!: ElementRef;
  @ViewChild('amountInput')
  amountInputRef!: ElementRef;
@Output() AddFruitHasBeenClicked = new EventEmitter<ingredient>();
  ing: any;
AddFruit() {
const ingName = this.nameInputRef.nativeElement.value;
const ingamount = this.amountInputRef.nativeElement.value;
const newIng = new ingredient(ingName,ingamount)
this.AddFruitHasBeenClicked.emit(newIng)
this.SeconedIng.push(newIng)
}
data(ing:any) {
  this.SeconedIng.push(ing)
}
}
