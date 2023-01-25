import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthViewModeEnum } from 'src/app/interfaces/auth.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent {
  @Output() returnBtnEvent = new EventEmitter<IAuthViewModeEnum>();

  constructor () {}

  private currentYear = new Date().getFullYear();
  minDate = new Date(this.currentYear - 100, 0, 1);
  maxDate = new Date(this.currentYear - 6, 0, 0);

  stepOneForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[A-Za-z][A-Za-z0-9]*$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[A-Za-z][A-Za-z0-9]*$')])
  });

  stepTwoForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁ\s]+$')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁ\s]+$')]),
    birthday: new FormControl('', [Validators.required])
  });

  checkControlValidation(step: number, formControlName: string, errorName: string): boolean {
    const selectedForm: FormGroup = step === 1 ? this.stepOneForm : this.stepTwoForm;

    return selectedForm.get(formControlName)?.hasError(errorName) || false;
  }

  returnBtnHandler(): void {
    this.returnBtnEvent.emit(IAuthViewModeEnum.Login);
  }
}
