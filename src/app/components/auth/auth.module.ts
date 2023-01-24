import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegistrationComponent],
  exports: [AuthComponent],
  imports: [],
})
export class ModuleModule {}
