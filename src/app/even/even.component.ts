import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModelForLearning } from './ModelForEdu';
import { loggingService } from '../logging.service';
import { AccountService } from '../accounts.service';
import {Router} from '@angular/router'
import { trainingModel } from '../training.module';
import { ServerService } from '../serv/servers.service';
@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
  providers: [loggingService,ServerService]
})
export class EvenComponent {
  @Input()
  evenNumber!: number;



data: ModelForLearning[] = [
  new ModelForLearning ('ali', 24, "Egypt"),
  new ModelForLearning ('Mohamed', 34, "Syria"),
  new ModelForLearning ('Mostafa', 23, "KSA"),
]



TheNamee = '';
TheContente = '';


@Output() MyItems1 = new EventEmitter<{ nam: string, conten: string}>();
@Output() MyItems2 = new EventEmitter<{nam: string, conten: string}>();
// serverCreated
// bluePrintCreated



  onBoldAdd() {
    this.MyItems1.emit({nam: this.TheNamee,conten: this.TheContente})
  }
  onItallicAdd() {
    this.MyItems2.emit({nam: this.TheNamee,conten: this.TheContente})
  }


  @Input() iWillPickAname2!:any

  ///////////////////////////


//   @Output() accountAdded = new EventEmitter<{name: string, status: string}>();


// onCreateAccount(accountName: string, accountStatus: string) {
//   this.accountAdded.emit({
//     name: accountName,
//     status: accountStatus,
//   })
// console.log('a server was changed, new status' + accountStatus)
// }
// constructor (private loggingService: loggingService,private accountService: AccountService) {}

// @Output() AccountDetails = new EventEmitter<{name:string, status:string}>();

// onCreateAccount(accountName: string, accountStatus: string) {
//   this.accountService.addAccount(accountName, accountStatus)
// this.loggingService.LogStatusChange(accountStatus)
// }

// constructor(private GoTo: Router, private serverService: ServerService) {

// }
// OnToServer() {
// this.GoTo.navigate(['odd'])
// }
// @Output() myData = new EventEmitter()
// Box:any = []
// PushServer(TheInput: HTMLInputElement) {
// this.Box.push(TheInput.value)
// this.myData.emit(this.Box)
// console.log(TheInput.value)
// }




}
