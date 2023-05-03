import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from '../servers.service';
import { canComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-serv',
  templateUrl: './edit-serv.component.html',
  styleUrls: ['./edit-serv.component.scss']
})
export class EditServComponent implements OnInit, canComponentDeactivate {
  server!: {id: number, name: string, status: string};
  ServerName = '';
  ServerStatus = '';
  allowEdit:boolean = false
  changedSaved:boolean = false;
constructor(private serverService: ServerService,private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    )
    this.route.fragment.subscribe()
    const id = +this.route.snapshot.params['id']
    // this.server = this.serverService.gerServer(id)
    this.ServerName = this.server.name
    this.ServerStatus = this.server.status
}
onUpdateServer() {
  this.serverService.upateServer(this.server.id, {name: this.ServerName, status: this.ServerStatus})
  this.changedSaved = true
  this.router.navigate(['../'], {relativeTo: this.route})
}
canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
  if (!this.allowEdit) {
  return true
  }
  if ((this.ServerName !== this.server.name || this.ServerStatus !== this.server.status) && !this.changedSaved) {
    return confirm('do you want to discard changes?')
  }else {
    return true;
  }
}
}
