import { Component } from '@angular/core';
import { LoginFormComponent } from "../loginform/login-form.component";

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export default class LoginViewComponent {
  title = "Login"
  constructor() {

  }

}
