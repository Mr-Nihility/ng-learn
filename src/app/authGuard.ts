import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "./services/auth/auth.service";

export const AuthGuard: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  => {
  return inject(AuthService).isLoggedIn;
}
