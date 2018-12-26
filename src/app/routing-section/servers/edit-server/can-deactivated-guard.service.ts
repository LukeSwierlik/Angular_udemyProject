import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

export interface ICanDeactivatedGuardService {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivatedGuardService implements CanDeactivate<ICanDeactivatedGuardService> {
    canDeactivate(component: ICanDeactivatedGuardService,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}
