import { Component, OnInit } from '@angular/core';
import IServiceInfo from '../serverInfo.interface';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICanDeactivatedGuardService } from './can-deactivated-guard.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit, ICanDeactivatedGuardService {

    private server: IServiceInfo;
    protected serverName: string;
    protected serverStatus: string;
    private changesSaved: boolean;

    constructor(private serverService: ServersService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.server = this.serverService.getServer(1);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    }

    protected onUpdateServer(): void {
        const serverUpdate = {
            id: this.server.id,
            name: this.serverName,
            status: this.serverStatus
        };

        this.serverService.updateServer(serverUpdate);
        this.changesSaved = true;
        this.router.navigate(['../'], {
            relativeTo: this.route
        });
    }

    public canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
            !this.changesSaved) {
            return confirm('Do you want to discard the changes?');
        } else {
            return true;
        }
    }
}
