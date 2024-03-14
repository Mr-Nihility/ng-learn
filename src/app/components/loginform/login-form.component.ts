import { NgClass } from "@angular/common";
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth/auth.service';

type UserForm = { firstName: string; lastName: string; email: string }

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {
  myForm: FormGroup;
  formErrors: UserForm = {
    'firstName': '',
    'lastName': '',
    'email': '',

  };

  validationMessages: {
    firstName: { minlength: string; required: string };
    lastName: { required: string };
    email: { required: string; email: string }
  } = {
      'firstName': {
        'required': 'Ім\'я обов\'язкове.',
        'minlength': 'Ім\'я повинно містити щонайменше 3 символи.'
      },
      'lastName': {
        'required': 'Прізвище обов\'язкове.'
      },
      'email': {
        'required': 'Email обов\'язковий.',
        'email': 'Введіть коректний email.'
      },
    };

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    });

    this.myForm.valueChanges.subscribe((data) => this.onValueChanged(data));


    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.myForm) {
      return;
    }
    const form = this.myForm;
    let field: keyof UserForm;
    for (field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {

        this.formErrors[field] = '';


        const control = form.get(field);

        if (control && control.dirty && !control.valid) {

          const messages = this.validationMessages[field];


          for (let key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {

              // @ts-ignore
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }


  onSubmit(form: FormGroup) {
    console.log(form)
    this.auth.login().subscribe((isLogin: boolean) => {
      if (isLogin) {
        this.router.navigate(["home"])
      }
    })
  }

}
