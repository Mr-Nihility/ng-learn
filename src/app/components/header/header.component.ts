import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private auth = inject(AuthService)

  constructor(private router: Router,) {
  }

  onLogInClick() {
    this.auth.login().subscribe(async () => {
      console.log(this.auth.isLoggedIn)
     await this.router.navigate([ 'home' ]);
    })

  }

 async onLogOutClick() {
    this.auth.logout()
    console.log(this.auth.isLoggedIn)
    await this.router.navigate([ 'login' ]);
  }

}
