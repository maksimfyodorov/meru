import { TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

export type CardType = 'table' | 'flex';

export interface IDescription {
  name: string;
  value: string;
  nameTpl?: TemplateRef<any>;
  valueTpl?: TemplateRef<any>;
  formControlTpl?: string;
  link?: string;
}

export interface ICoverImage {
  src: string;
  alt: string;
}
export interface ICard {
  title: string;
  width?: string;
  image: string;
  descriptionList: IDescription[];
  tags: string[];
  form?: FormGroup;
}
export interface IReservationMobileCard {
  descriptionList: IDescription[];
  tags: string[];
  dateTimeFrom: Date;
  dateTimeTo: Date;
  status: string;
}

export enum CardEditModeEvent {
  Enable,
  Save,
  Cancel,
}
