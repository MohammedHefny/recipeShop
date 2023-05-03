import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {
//   @Output() intervalFired = new EventEmitter<number>();
//   Intervals: any;
//   lastNumber:number = 0;
// OnStartGame () {
//   this.Intervals =  setInterval(()=>{
//     this.intervalFired.emit(this.lastNumber + 1)
//     this.lastNumber++;
//   },1000)
// }
// OnpauseGame () {
// clearInterval(this.Intervals)
// }






@Output() numIncrement = new EventEmitter<number>();
stopper:any;
counter:number = 1;

onStartGame() {
  this.stopper = setInterval(()=>{
    this.numIncrement.emit(this.counter)
    ++this.counter
  },1000)
}

onPauseGame() {
  clearInterval(this.stopper);
}





}


