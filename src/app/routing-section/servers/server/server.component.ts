import { Component, OnInit } from '@angular/core';
import IServiceInfo from '../serverInfo.interface';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

    protected server: IServiceInfo;

    constructor(private serversService: ServersService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        const paramsId = this.route.snapshot.params['id'];
        const id = parseInt(paramsId, 10) || 1;

        this.server = this.serversService.getServer(id);

        this.route.params.subscribe((params: Params) => {
            const paramId = parseInt(params['id'], 10) || 1;
            this.server = this.serversService.getServer(paramId);
        });
    }

    protected onEdit(): void {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }

}
