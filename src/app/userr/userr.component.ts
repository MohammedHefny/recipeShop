import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../users.service';

@Component({
  selector: 'app-userr',
  templateUrl: './userr.component.html',
  styleUrls: ['./userr.component.scss']
})
export class UserrComponent implements OnInit {
  id!:number;
  constructor(private route: ActivatedRoute, private userService: UserService) {}
  ngOnInit(){
    // this.route.params.subscribe( (params: Params)=> {
    //   // this.id = +params.id;
    //   this.id = +params['id'];
    // });
  }
  onActivate() {
    // this.userService.activatedEmitter.next(true)
    this.userService.activatedEmitter.next(true)
  }
}
