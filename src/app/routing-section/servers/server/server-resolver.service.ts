import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import IServiceInfo from '../serverInfo.interface';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerResolverService implements Resolve<IServiceInfo> {

    constructor(private serversService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<IServiceInfo> | Promise<IServiceInfo> | IServiceInfo {
        return this.serversService.getServer(route.params['id']);
    }
}
