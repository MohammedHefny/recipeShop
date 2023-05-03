import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServerService } from '../servers.service';

@Component({
  selector: 'app-ser',
  templateUrl: './ser.component.html',
  styleUrls: ['./ser.component.scss']
})
export class SerComponent implements OnInit{
// server:any
  server!: { id: number; name: string; status: string; };

  // server: {id: number, name: string, status: string}[] = [];

  constructor (private serverService: ServerService, private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: Data) => {
        this.server = data['server']
      }
    );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serverService.gerServer(id)
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.server = this.serverService.gerServer(+params['id'])
    //   }
    //   );
    }
    onEdit() {
      this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
    }
  }
