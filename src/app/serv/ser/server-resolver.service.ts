import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServerService } from "../servers.service";
interface server {
  id: number;
  name:string;
  status: string;
}
@Injectable()
export class ServerResolver implements Resolve<server> {
  constructor(private serverService: ServerService){}

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): server | Observable<server> | Promise<server> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    // this.serverService.gerServer(+route.params['id'])
    return  this.serverService.gerServer(+route.params['id'])
  }

}
