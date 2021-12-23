import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from '@presentation/auth/auth.service';
import { Observable } from 'rxjs';
import { UserService } from '@core/services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private _user: UserService,
    private _auth: AuthService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._auth.isLoggedIn) {
      request = request.clone({
        headers: request.headers
          .set('Authorization', this._user.authorization)
          .set('label_token', this._user.tokenUUID)
          .set('deviceOs', 'ANGULAR'),
        body: {
          ...request.body,
          tokenUUID: this._user.tokenUUID,
          deviceId: this._user.deviceId,
        },
      });
    } else {

    }


    return next.handle(request);
  }
}
