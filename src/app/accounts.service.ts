import { loggingService } from "./logging.service";
import { Injectable, EventEmitter } from '@angular/core'
@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'master account',
      status: 'active'
    },
    {
      name: 'test account',
      status: 'inactive'
    },
    {
      name: 'hidden account',
      status: 'unknown'
    },
  ];

  statusUpdated = new EventEmitter<string>();

constructor(private loggingService: loggingService) {}

  addAccount(name:string, status: string) {
    this.accounts.push({name:name, status: status})
    this.loggingService.LogStatusChange(status)
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status
    this.loggingService.LogStatusChange(status)

  }
}
