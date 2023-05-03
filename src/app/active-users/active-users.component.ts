import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit{
inactiveIsClicked(_t6: number) {
throw new Error('Method not implemented.');
}
  // users: string[] = [];
  // constructor(private userService: UserService) {}
  // ngOnInit()  {
  //   this.users = this.userService.activeUsers
  // }
  // onSetToInactive(id: number) {
  //   this.userService.setToInactive(id)
  // }

  activeNames:string[] = []
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.activeNames = this.userService.activeUsers
  }

// @Output() OnactiveClick = new EventEmitter<number>();

activeIsClicked(id:number) {
// this.OnactiveClick.emit(id)
this.userService.activeVal(id)
}
}
