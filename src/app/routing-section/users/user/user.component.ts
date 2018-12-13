import { Component, OnDestroy, OnInit } from '@angular/core';
import IUser from '../user.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {

    protected user: IUser;
    private paramsSubscription: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        const { snapshot } = this.route;

        this.user = {
            id: snapshot.params['id'],
            name: snapshot.params['name']
        };

        this.paramsSubscription = this.route.params
            .subscribe((params: Params) => {
                this.user.id = params['id'];
                this.user.name = params['name'];
            });
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }
}
