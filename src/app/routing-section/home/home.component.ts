import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(private router: Router,
                private authService: AuthService) {
    }

    protected onLoadServers(): void {
        this.router.navigate(['/routing/servers']);
    }

    protected onLogin(): void {
        this.authService.login();
    }

    protected onLogout(): void {
        this.authService.logout();
    }
}
