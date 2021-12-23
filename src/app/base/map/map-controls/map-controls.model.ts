import { MarkItemLogicType } from '@base/map/map-mark/map-mark.model';

export interface IMapControlBase {
  icon: string;
  tooltip?: string;
  active?: boolean;
}
export interface IMarkMapControl extends IMapControlBase {
  id: MarkItemLogicType;
  markControl: true;
}
export interface IMapControl  extends IMapControlBase {
  id: 'Areas';
  markControl: false;
}

export type MapControl = IMapControl | IMarkMapControl;
export type MapControlType = MapControl['id'];


