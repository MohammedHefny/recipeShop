import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  // template: `
  // <app-server><app-server>
  // <app-server><app-server>
  // `,
  templateUrl: "./servers.component.html" ,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
allowNewServer = false;
serverCreationStatus = 'No Server Was Created'
serverName = 'You can write anything you want';
ServerCreated = false;
// ngFor
servers = ['Testserver', 'Testserver 2']
constructor () {
  setTimeout(()=> {
    this.allowNewServer = true;
  },2000)
}
ngOnInit () {
}
onCreateServer () {
  this.ServerCreated = true;
  this.servers.push(this.serverName)
  this.serverCreationStatus = 'server was created and it\'s name is' + this.serverName;
}
onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement> event.target).value;
}
}
