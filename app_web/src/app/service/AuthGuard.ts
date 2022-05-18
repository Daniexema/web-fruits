import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "./Authentication.service";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
        ) {}

    canActivate(): boolean {
        if(this.authenticationService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['/index']);
        return false;
    }
}