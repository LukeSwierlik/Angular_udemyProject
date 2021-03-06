import {Component, Input} from '@angular/core';
import {LoggingService} from '../service/logging.service';
import {AccountsService} from '../service/accounts.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html'
})
export class AccountComponent {
    @Input()
    account: {
        name: string,
        status: string
    };

    @Input()
    id: number;

    constructor(private loggingService: LoggingService,
                private accountsService: AccountsService) {}

    onSetTo(status: string) {
        this.accountsService.updateStatus(this.id, status);
        this.accountsService.statusUpdated.emit(status);
    }
}
