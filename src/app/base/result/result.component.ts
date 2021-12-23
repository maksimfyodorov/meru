import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzResultStatusType } from 'ng-zorro-antd/result';
import { DictionaryService } from '@core/services/dictionary.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: [ './result.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent {
  public status: NzResultStatusType = 'info';

  @Input()
  public title: string;

  @Input()
  public subtitle: string | null = null;

  @Input()
  public message: string = '';

  @Input('status')
  public set inputStatus(status: NzResultStatusType) {
    this.status = status;
    this.setTitleByStatus(status);
  }

  // @Input()
  // public reasonsTitle: string | null = null;

  // @Input()
  // public reasons: string[] = [];

  // @Input()
  // public reasonsIcon: string = '';

  public constructor(
    private $dict: DictionaryService
  ) {
  }

  public get resultSubtitle(): string | null {
    return !this.withSubtitleAndMessage
      ? this.subtitle
      : null;
  }

  public get withSubtitleAndMessage(): boolean {
    return !!this.message && !!this.subtitle;
  }

  private setTitleByStatus(status: NzResultStatusType): void {
    if (this.title) return;

    switch (status) {
      case '403':
        this.title = this.$dict.get('AccessDenied');
        // this.reasonsIcon = 'close-circle';
        break;

      case '404':
        this.title = this.$dict.get('NotFound');
        break;

      case '500':
        this.title = this.$dict.get('ServerError');
        break;

      case 'error':
        this.title = this.$dict.get('Error');
        // this.reasonsIcon = 'close-circle';
        break;

      case 'info':
        this.title = this.$dict.get('Attention');
        // this.reasonsIcon = 'info-circle';
        break;

      case 'warning':
        this.title = this.$dict.get('Attention');
        // this.reasonsIcon = 'exclamation-circle';
        break;

      case 'success':
        this.title = this.$dict.get('Attention');
      // this.reasonsIcon = 'check-circle';
    }
  }

}
