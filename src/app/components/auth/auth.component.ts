import { IAuthViewModeEnum } from './../../interfaces/auth.interface';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent {
  constructor() {}

  authViewModes = IAuthViewModeEnum;
  authViewMode: IAuthViewModeEnum = IAuthViewModeEnum.Login;

  toggleAuthViewMode(viewMode: IAuthViewModeEnum) {
    this.authViewMode = viewMode;
  }
}
