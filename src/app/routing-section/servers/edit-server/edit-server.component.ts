import { Component, OnInit } from '@angular/core';
import IServiceInfo from '../serverInfo.interface';
import { ServersService } from '../servers.service';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit {

    private server: IServiceInfo;
    protected serverName: string;
    protected serverStatus: string;

    constructor(private serverService: ServersService) {
    }

    ngOnInit() {
        this.server = this.serverService.getServer(1);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    }

    onUpdateServer(): void {
        const serverUpdate = {
            id: this.server.id,
            name: this.serverName,
            status: this.serverStatus
        };

        this.serverService.updateServer(serverUpdate);
    }
}
