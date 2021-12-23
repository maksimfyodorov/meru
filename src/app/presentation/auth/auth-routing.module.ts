import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes, ROUTES } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/login/login.component';
import { OtpComponent } from './components/otp/otp.component';
import { OauthSuccessComponent } from '@presentation/auth/components/oauth/oauth-sucess/oauth-success.component';
import { AuthComponent } from '@presentation/auth/auth.component';

@NgModule({
  imports: [ RouterModule ],
  exports: [ RouterModule ],
  providers: [ {
    provide: ROUTES,
    useFactory: configAuthMethodHandlerRoutes,
    deps: [ AuthService ],
    multi: true,
  } ],
})
export class AuthRoutingModule {
}

export function configAuthMethodHandlerRoutes($auth: AuthService): Routes {
  const otpComponentRoute: Route = {
    path: '',
    pathMatch: 'full',
    component: OtpComponent,
  };
  const loginComponentRoute: Route = {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  };

  const routes: Routes = [{
    component: AuthComponent,
    path: '',
    children: []
  }];

  switch ($auth.authMethod) {
    case 'otp':
      routes[0].children.push(otpComponentRoute);
      break;

    default:
      routes[0].children.push(loginComponentRoute);
  }

  if ($auth.oauth2Available) {
    routes[0].children.push({
      path: $auth.oauthSuccessRoute,
      component: OauthSuccessComponent
    });
  }

  return routes;
}
