export class AuthService {
    private loggedIn = false;

    public isAuthenticated() {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        }));
    }

    public login(): void {
        this.loggedIn = true;
    }

    public logout(): void {
        this.loggedIn = false;
    }
}
