import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit{
//   users: string[] = [];

//   constructor(private userService: UserService) {}
//     ngOnInit()  {
//       this.users = this.userService.inactiveUsers;
//     }

// onSetToActive (id: number) {
//   this.userService.setToActive(id);

// }


// @Input() inActiveNames!:string[];
inActiveNames:string[]=[];

// @Output() OnInactiveClick = new EventEmitter<number>()

constructor(private userService: UserService) {

}
  ngOnInit() {
    this.inActiveNames = this.userService.inactiveUsers
  }

inactiveIsClicked (id:number) {
// this.OnInactiveClick.emit(id)
this.userService.inactiveVal(id);
}
}
