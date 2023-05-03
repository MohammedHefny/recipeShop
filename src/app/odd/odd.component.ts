import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { loggingService } from '../logging.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss'],
  providers: [loggingService]
})
export class OddComponent implements OnInit{
  @Input()
  oddNumber!: number;





  TheNamee = '';
  TheContente = '';

// @Input() items! : any

@Input() items!:{typ: string, nam: string, conten: string}

@Input() iWillPickAname1!:any



//

// @Input()
// account!: { name: string; status: string; };

// @Input()
// id!: number;

// @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


// onsetTo(status:string) {
// this.statusChanged.emit({id: this.id, newStatus : status})
// console.log('a server was changed, new status' + status)

// }


// @Input() newAccount!: {name: string; status:string;};

// constructor (private loggingService: loggingService,private accountsService: AccountService) {}

// onsetTo(status:string) {
//   this.loggingService.LogStatusChange(status)
// }

// users = [
//   {
//     id: 1,
//     name: 'max'
//   },
//   {
//     id: 2,
//     name: 'Anna'
//   },
//   {
//     id: 3,
//     name: 'chris'
//   },
// ]

data = [
  {
    id: 1,
    name: 'mohamed'
  },
  {
    id: 2,
    name: 'Osama'
  },
  {
    id: 3,
    name: 'Ali'
  },
]

constructor (private goBack: Router, private route: ActivatedRoute) {}
GoBack() {
  this.goBack.navigate(['odd/mychild'])
}
@Input() toOdd!:any

id!:number
name!:string
ngOnInit() {
  this.route.params.subscribe(
    (params: Params)=> {
      this.id = +params['id']
      this.name = params['name']
      console.log(this.id)
      // console.log(this.name)
    }
  )
}


// constructor (private route: ActivatedRoute) {}
// ngOnInit(){
//   this.route.params
//   .subscribe(
//     (params: Params)=> {
//       this.id = +params['id'];
//       this.editMode = params['id'] != null;
//       console.log(this.editMode)
//     }
//   )
// }


}
