import { IAction } from '@core/models/actions.model';
import { ICondition } from '@core/models/condition.model';

export type StatusRendererType = 'danger' | 'warning' | 'info';
export type RendererType =
  'datetime'
  | 'number'
  | 'action'
  | 'actions'
  | 'map'
  | 'object'
  | 'status'
  | 'link'
  | 'dictionary'
  | 'template';

export type Renderer = ICommonRenderer<'number', IFormatterRendererOptions>
  | ICommonRenderer<'datetime', IFormatterRendererOptions>
  | ICommonRenderer<'map', IMapRendererOptions>
  | ICommonRenderer<'object', IObjectRendererOptions>
  | ICommonRenderer<'action', IActionRendererOptions>
  | ICommonRenderer<'actions', IActionsRendererOptions>
  | IStatusRenderer
  | ICommonRenderer<'link', ILinkRendererOptions>
  | IDictionaryRenderer
  | ITemplateRenderer;

export type RendererOptions = IFormatterRendererOptions
  | ILinkRendererOptions
  | IMapRendererOptions
  | IObjectRendererOptions
  | IActionRendererOptions
  | IActionsRendererOptions
  | IStatusRendererOptions
  | IDictionaryRendererOptions
  | ITemplateRendererOptions;

export interface IDictionaryRenderer extends ICommonRenderer<'dictionary', IDictionaryRendererOptions> {
}

export interface IStatusRenderer extends ICommonRenderer<'status', IStatusRendererOptions> {
}

export interface ITemplateRenderer extends ICommonRenderer<'template', ITemplateRendererOptions> {
}

export interface ICommonRenderer<T extends RendererType, O extends Record<string, any>> {
  type: T;
  options: O;
}

export interface IFormatterRendererOptions {
  format: string | Record<string, string>;
}

export interface ILinkRendererOptions {
  url?: string;
  route?: string;
  relativeRoute?: boolean;
}

export interface IMapRendererOptions<T extends Record<string, any> = Record<string, any>> {
  map: T;
}

export interface IObjectRendererOptions {
  pattern: string;
}

export interface IActionRendererOptions extends IAction {
}

export interface IActionsRendererOptions {
  actions: Array<IActionRendererOptions>;
  direction?: string;
}

export interface IStatusRendererOptions extends IMapRendererOptions<IStatusRendererMap> {
}

export interface IStatusRendererMap extends Record<string, any> {
  [key: string]: {
    value: string;
    color: string;
  };
}

export interface IDictionaryRendererOptions extends ILinkRendererOptions {
  order: number;
  name: string;
  fieldForm: string;
  fieldTo: string;
}

export interface ITemplateRendererOptions extends ILinkRendererOptions {
  pattern: string;
  condition: ICondition;
  emptyPattern: string;
}
