import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
        console.log('In canActivate: ' + state.url);
        return this.checkLoggedIn(state.url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('In canActivateChild: ' + state.url);
        return this.checkLoggedIn(state.url);
    }

    canLoad(route: Route): boolean {
        console.log('In canLoad: ' + route.path);
        return this.checkLoggedIn(route.path);
    }

    checkLoggedIn(url: string): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        // Retain the attempted URL for redirection
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }

}