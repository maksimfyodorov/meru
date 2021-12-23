import { NzSliderShowTooltip } from 'ng-zorro-antd/slider';
import { NzMarks } from 'ng-zorro-antd/slider/typings';

export interface IMapZoomOptions {
  min: number;
  max: number;
  step: number;
  dots?: boolean;
  vertical?: boolean;
  range?: boolean;
  tooltipVisible?: NzSliderShowTooltip;
  marks?: NzMarks;
  tipFormatter?: (zoom: number) => string;
}
