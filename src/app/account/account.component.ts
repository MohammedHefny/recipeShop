import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../accounts.service';
import {loggingService} from '../logging.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  // providers: [loggingService]

})
export class AccountComponent {
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(private loggingService: loggingService,
    private accountsService: AccountService) {}

onsetTo(status:string) {
  // this.statusChanged.emit({id: this.id, newStatus : status})
  this.accountsService.updateStatus(this.id, status)
  // this.loggingService.LogStatusChange(status)
  this.accountsService.statusUpdated.emit(status);
}
}
