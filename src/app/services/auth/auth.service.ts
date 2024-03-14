

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );


  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
