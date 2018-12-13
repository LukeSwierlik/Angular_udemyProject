import { Component, OnInit } from '@angular/core';
import IServiceInfo from './serverInfo.interface';
import { ServersService } from './servers.service';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

    protected servers: Array<IServiceInfo> = [];

    constructor(private serversService: ServersService) {
    }

    ngOnInit() {
        this.servers = this.serversService.getServers();
    }
}
