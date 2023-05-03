import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
users = [
  {
    id: 1,
    name: 'max'
  },
  {
    id: 2,
    name: 'Anna'
  },
  {
    id: 3,
    name: 'chris'
  },
]
}
