import { Injectable } from '@angular/core';
import { IImage } from '@app/layout/header/header.model';
import { INotifications } from '@app/layout/header/components/header-notifications/header-notifications.model';

@Injectable()
export class HeaderService {
  constructor() { }
  get logo(): IImage {
    return {
      src: './assets/images/logo.svg',
      alt: 'Meru-Software',
      title: 'Meru-Software',
    };
  }
  get notifications(): INotifications {
    return [
      {
        id: '1',
        type: 'success',
        message: 'Авторизация прошла успешно',
      },
      {
        id: '2',
        type: 'info',
        message: 'Рады приветствовать вас в нашей системе',
      },
      {
        id: '3',
        type: 'warning',
        message: 'Подтвердите вашу электронную почту',
      },
      {
        id: '4',
        type: 'error',
        message: 'Произошла ошибка на сервере',
      },
    ];
  }
  get notificationIconsMap(): Record<string, string> {
    return {
      info: 'info-circle',
      error: 'close-circle',
      success: 'check-circle',
      warning: 'warning',
    };
  }
}
