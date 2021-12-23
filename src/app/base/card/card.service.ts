import { Injectable } from '@angular/core';
import { ICard } from '@base/card/card.model';

@Injectable()
export class CardService {
  constructor() { }
  get card(): ICard {
    return {
      title: 'Test title',
      width: '320px',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      descriptionList: [
        { name: 'Статус', value: 'Подтверждено'},
        { name: 'Начало', value: '14.02.2020 16:15'},
        { name: 'Окончание', value: '14.02.2020 18:00'},
        { name: 'Номер', value: '22-17'},
        { name: 'Помещение', value: 'Desk'},
        { name: 'Отдел', value: '22-17'},
      ],
      tags: ['Монитор', 'Телевизор', 'Мягкий стул', 'Internet port', 'Проектор']
    };
  }
}
