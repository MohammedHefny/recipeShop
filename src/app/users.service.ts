import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // the injected service
  // constructor(private counterService: CounterService){}
  // the injected service

  // setToActive(id: number) {
    // this.activeUsers.push(this.inactiveUsers[id])
    // this.inactiveUsers.splice(id, 1)
    // the injected service
    // this.counterService.incrementInctiveToAcive()
    // the injected service
  // }

  // setToInactive(id: number) {
    // this.inactiveUsers.push(this.activeUsers[id])
    // this.activeUsers.splice(id, 1)
    // the injected service
    // this.counterService.incrementActiveToInacive()
    // the injected service
  // }


  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activatedEmitter: any;

  constructor(private counterService: CounterService){}

  inactiveVal(id: number) {
  this.activeUsers.push(this.inactiveUsers[id])
  this.inactiveUsers.splice(id,1)
  this.counterService.incrementInactiveToActive()

  }

  activeVal(id: number) {
  this.inactiveUsers.push(this.inactiveUsers[id])
  this.activeUsers.splice(id,1)
  this.counterService.incrementActiveToInactive()
  }




}
