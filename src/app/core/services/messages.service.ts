import { Injectable } from '@angular/core';
import { MessageType } from '../types/message.type';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LocalizationService } from './localization.service';

const DURATION: number = 5000;

@Injectable()
export class MessagesService {
  constructor(
    private $message: NzMessageService,
    private $localization: LocalizationService
  ) {
  }

  public create(content: string, type: MessageType = 'info', duration: number = DURATION): string {
    content = this.$localization.translate(content);

    return this.$message.create(type, content, { nzDuration: duration }).messageId;
  }

  public remove(messageId: string): void {
    this.$message.remove(messageId);
  }

  public error(content: string, duration: number = DURATION): string {
    return this.create(content, 'error', duration);
  }

  public info(content: string, duration: number = DURATION): string {
    return this.create(content, 'info', duration);
  }

  public success(content: string, duration: number = DURATION): string {
    return this.create(content, 'success', duration);
  }

  public warning(content: string, duration: number = DURATION): string {
    return this.create(content, 'warning', duration);
  }

  public loading(content: string, duration: number = 0): string {
    return this.create(content, 'loading', duration);
  }
}
