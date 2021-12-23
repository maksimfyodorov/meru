export interface IWidget {
  id: number | string;
  title: string;
  draggable?: boolean;
  bordered?: boolean;
  type?: string;
}

export type WidgetAction = 'remove';

export interface IWidgetAction {
  id: number | string;
  type: WidgetAction;
}
