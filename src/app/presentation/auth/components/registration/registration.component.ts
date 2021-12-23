import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  registrationObject = {
    domain: null,
    login: null,
    password: null
  }
  isCaptchaResolved: boolean;
  isBotDetected: boolean;
  showMessge = false;
  get showCaptcha(): boolean {
    return this.isBotDetected && !this.isCaptchaResolved;
  }
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * hide success message
   */
  hideSuccessMeassge(){
    this.showMessge = false;
  }

}
