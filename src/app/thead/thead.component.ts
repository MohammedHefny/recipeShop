import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thead',
  templateUrl: './thead.component.html',
  styleUrls: ['./thead.component.scss']
})
export class TheadComponent {
@Output() checkTheType = new EventEmitter<string>();

myNameIs (type:string) {
this.checkTheType.emit(type)
}

}
