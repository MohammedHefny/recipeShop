import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-use',
  templateUrl: './use.component.html',
  styleUrls: ['./use.component.scss']
})
export class UseComponent implements OnInit, OnDestroy {
  user!: { id: number; name: string; };
  paramsSubcription: Subscription = new Subscription;
ngOnInit() {
  this.user = {
    id:this.route.snapshot.params['id'],
    name:this.route.snapshot.params['name'],
  };
  this.paramsSubcription = this.route.params.subscribe(
    (params: Params) => {
      this.user.id = params['id']
      this.user.name = params['name']
    }
  );
}
ngOnDestroy() {
  this.paramsSubcription.unsubscribe()
}
constructor(private route: ActivatedRoute) {}
}
