import { Component } from '@angular/core';

@Component({
  selector: 'app-a-ss3',
  templateUrl: './a-ss3.component.html',
  styleUrls: ['./a-ss3.component.scss']
})
export class ASS3Component {
  // practicing the previous stuff
//   id = 2138;
//   status = "active";
//   serverName = 'Testserver'
//   box = ['Testserver', 'Testserver 2']
//   onButtonClick () {
// this.show = !this.show;
// this.box.push(this.serverName)
//   }
//   constructor () {
//     this.status = Math.random() > 0.5 ? 'online' : 'offline';
//   }
//   getColor() {
//     return this.status === 'online' ? 'blue' : 'red'
//   }

  // assingmnet start

  // on button click the color will change and the paragraph will toggle

show = false
log:any [] = []
onToggleDetails () {
this.show = !this.show;
this.log.push(this.log.length + 1)
// this.box.push(new Date())
}
}
