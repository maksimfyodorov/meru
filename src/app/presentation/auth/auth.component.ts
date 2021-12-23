import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthDictionary } from '@presentation/auth/auth.dictionary';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  public title: keyof typeof AuthDictionary = 'SystemLogin';

  constructor() { }

  ngOnInit(): void {
  }

}
