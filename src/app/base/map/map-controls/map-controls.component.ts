import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { ConfigService } from '@src/app/core/services/config.service';
import { MarkItemLogicType } from '../map-mark/map-mark.model';
import { MapControl } from './map-controls.model';
import { getControls } from './map-controls.utils';

@Component({
  selector: 'app-map-controls',
  templateUrl: './map-controls.component.html',
  styleUrls: ['./map-controls.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapControlsComponent {
  private _nornikAplana = false; // Прячем области для НН
  private _hiddenMarks: MarkItemLogicType[] = [];

  private _controls: MapControl[] = getControls();

  @Input() set hiddenMarks(value: MarkItemLogicType[]) {
    if (Array.isArray(value)) {
      this._hiddenMarks = value;
      this._controls.forEach((control) => {
        if (control.markControl) {
          control.active = !this._hiddenMarks.includes(control.id);
        }
      });
    }
  }

  @Input() set hiddenControls(value: string[]) {
    if (this._nornikAplana) {
      this._controls = this._controls.filter((c) => c.id !== 'Areas');
    }
    this._hiddenMarks = [];
    this._controls = this._controls.filter((c) => {
      let res = !value.includes(c.id);
      if (!res) {
        if (c.id !== 'Areas') {
          this._hiddenMarks.push(c.id);
        }
      }
      return res;
    });
    this.hiddenMarksChange.next([...this._hiddenMarks]);
  }

  @Output()
  public areaVisibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public hiddenMarksChange: EventEmitter<MarkItemLogicType[]> = new EventEmitter<MarkItemLogicType[]>();

  get controls(): MapControl[] {
    return this._controls;
  }

  constructor(private _cdr: ChangeDetectorRef, private $config: ConfigService) {
    this._nornikAplana = this.$config.get<boolean>('nornikAplana') === true;
  }

  toggleControl(control: MapControl, $event: Event) {
    // $event.preventDefault();
    this.setControlActivity(control.id, !control.active);
    this._cdr.markForCheck();
    return false;
  }

  private setControlActivity(id: MapControl['id'], active: boolean): void {
    this._controls.forEach((control) => {
      if (control.id === id) {
        control.active = active;
        if (control.id === 'Areas') {
          this.areaVisibilityChange.next(active);
        } else {
          if (control.active) {
            this._hiddenMarks = this._hiddenMarks.filter((mark) => mark !== control.id);
          } else {
            this._hiddenMarks.push(control.id);
          }
          this.hiddenMarksChange.next([...this._hiddenMarks]);
        }
      }
    });
  }
}
