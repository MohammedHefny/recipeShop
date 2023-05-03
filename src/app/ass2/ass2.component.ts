import { Component } from '@angular/core';

@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
  // styleUrls: ['./ass2.component.scss']
  styles: [`
  p {
    font-size:20px;
    color: red;
  }
  h2 {
    color:blue;
  }
  `]
})
export class Ass2Component {
id: number = 2138;
status:string = "online";
// to make the button become clickable after a number of seconeds
allowNewServer = false;
// constructor () {

//   setTimeout(() => {
//     this.allowNewServer = true;

//   }, 2000);
// }
// when we click on the button message will change
serverMessage = "no server was created"
onCreateServer () {
  this.serverMessage = "A server was created and it's name is " + this.serverName
}
serverName = ""
onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value
}
// assignment 2 start
userName = "dss"
clicker = true;

makeEmpty () {
  this.userName = ""
}
}
