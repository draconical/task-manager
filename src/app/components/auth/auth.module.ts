import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegistrationComponent],
  exports: [AuthComponent],
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule],
})
export class AuthModule {}
