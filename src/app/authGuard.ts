import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

export const AuthGuad: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> => {
  console.log(route, state)
  return false
}
