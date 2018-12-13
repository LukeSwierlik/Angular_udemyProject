import {Component, OnInit} from '@angular/core';
import IUser from './user.interface';
import usersData from './usersData.json';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    protected users: Array<IUser>;

    constructor() {
    }

    ngOnInit() {
        this.users = usersData;
    }
}
