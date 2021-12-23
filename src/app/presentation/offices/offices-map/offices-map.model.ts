import { IMultiSwitcherItem } from '@base/multi-switcher/multi-switcher.model';
import { NzSliderShowTooltip } from 'ng-zorro-antd/slider/typings';

export interface IOfficesMapControl {
  id: string;
  icon: string;
  tooltip?: string;
  active?: boolean;
  value: string;
}
export type TypesWorkplaceReservation = 'Disabled' | 'Free' | 'ReservedByMeNotConfirmed' | 'ReservedByMe' | 'ReservedByUser';
export interface IOfficesMapSwitcher {
  value: string | number;
  items: IMultiSwitcherItem[];
}
export interface OfficesMapFilter {
  date: {
    value: Date[];
    format: string;
    workHours: number[];
  };
  slider: {
    value: number[];
    step: number;
    min: number;
    max: number;
    tipFormatter: (value: number) => string;
    disabled: boolean;
    tooltipVisible: NzSliderShowTooltip;
    marks: Record<number, any>;
  };
}
