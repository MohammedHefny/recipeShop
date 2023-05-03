import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{


  // data = [
  //   {
  //     id: 1,
  //     name: 'mohamed'
  //   },
  //   {
  //     id: 2,
  //     name: 'Osama'
  //   },
  //   {
  //     id: 3,
  //     name: 'Ali'
  //   },
  // ]

  data!: {id:number, name: string}
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
this.data = {
  id: this.route.snapshot.params['id'],
  name: this.route.snapshot.params['name'],
}
}


// @Input() receivedFromParent!: ElementRef<HTMLInputElement>
@Input() set receivedFromParent(name: string) {
  console.log('this is the setted name' + name)
}
@Output() DataSentFromChild = new EventEmitter()

onSend() {
  this.DataSentFromChild.emit('hello i have been sent using @output')
}

}
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from "@angular/router";
// export class UseComponent implements OnInit {
//   user!: { id: number; name: string; };

// ngOnInit() {
//   this.user = {
//     id:this.route.snapshot.params['id'],
//     name:this.route.snapshot.params['name'],
//   };
// }
// constructor(private route: ActivatedRoute) {}
// }
