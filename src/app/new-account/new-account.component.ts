import { Component, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../accounts.service';
import {loggingService} from '../logging.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  // providers: [loggingService]
})
export class NewAccountComponent {
// @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

constructor(private loggingService: loggingService,
  private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string)=> alert('New status ' + status)
    )
  }

onCreateAccount(accountName: string, accountStatus: string) {
  // this.accountAdded.emit({
  //   name: accountName,
  //   status: accountStatus,
  // })
  this.accountService.addAccount(accountName, accountStatus)
// this.loggingService.LogStatusChange(accountStatus)

}
}
