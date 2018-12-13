import {Injectable} from '@angular/core';
import serversData from './serversData.json';
import IServiceInfo from './serverInfo.interface';

@Injectable({
    providedIn: 'root'
})
export class ServersService {

    private servers = [];

    constructor() {
        this.servers = serversData;
        console.log('[ServersService] servers', this.servers);
    }

    getServers(): Array<IServiceInfo> {
        return this.servers;
    }

    getServer(id: number): IServiceInfo {
        return this.servers.find(s => s.id === id);
    }

    updateServer(serverInfo: IServiceInfo): void {
        const server = this.getServer(serverInfo.id);

        if (server) {
            const { name, status } = serverInfo;

            server.name = name;
            server.status = status;
        }
    }
}
