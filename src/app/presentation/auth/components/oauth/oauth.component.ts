import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OauthService } from '@presentation/auth/components/oauth/oauth.service';

@Component({
  selector: 'app-oauth-login',
  templateUrl: './oauth.component.html',
  styleUrls: [ './oauth.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OauthComponent implements OnInit {

  constructor(
    private $service: OauthService
  ) {
  }

  loginAction(): void {
    this.$service.loginOauth();
  }

  ngOnInit(): void {
    this.$service.configureOauth();
  }
}
