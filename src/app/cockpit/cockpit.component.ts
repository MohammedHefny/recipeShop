import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {
//   @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
//   @Output() bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
//   newServerName = '' ;
//   newServerContent = '' ;

//   onServerAdded() {
// this.serverCreated.emit({serverName: this.newServerName,
//   serverContent:this.newServerContent});
// }
// onBluePrintAdded() {
//   this.bluePrintCreated.emit({serverName: this.newServerName,
//     serverContent:this.newServerContent});
//   }


 /// the start
   @Output() anyNameCreated = new EventEmitter<{name:string, content:string}>();
  @Output() anyName2Created = new EventEmitter<{name:string, content:string}>();
  // inputName = '';
// inputContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput!: ElementRef;
box:any [] = []
putInServer (Hashtag:HTMLInputElement) {
this.anyNameCreated.emit({
  name: Hashtag.value,
  content:this.serverContentInput.nativeElement.value
});
}

putInBluePrint (Hashtag:HTMLInputElement) {
  this.anyName2Created.emit({
    name: Hashtag.value,
    content:this.serverContentInput.nativeElement.value
  });
}
}
