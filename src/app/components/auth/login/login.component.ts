import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  constructor() {}

  authForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[A-Za-z][A-Za-z0-9]*$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[A-Za-z][A-Za-z0-9]*$')])
  });

  checkControlValidation(formControlName: string, errorName: string): boolean {
    return this.authForm.get(formControlName)?.hasError(errorName) || false;
  }
}
