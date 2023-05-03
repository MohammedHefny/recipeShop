import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ServerService } from './servers.service';
@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.scss']
})
export class ServComponent implements OnInit{

  // private servers: {id: number, name: string, status: string}[] = [];
  servers: {id: number, name: string, status: string}[] = [];
  constructor(private serversService: ServerService, private router: Router,
    private route: ActivatedRoute) {}
  ngOnInit(){
    this.servers = this.serversService.gerServers()
  }

// servers: {id: number, name: string, status: string}[] = [];
  onReload() {
    this.router.navigate(['/serv'], {relativeTo: this.route})
  }

}
