import { TemplateRef } from '@angular/core';

export interface IAdvCard {
  title: string;
  image: any;
  descriptionList: IAdvDescription[];
  tags: string[];
}

export interface IAdvDescription {
  name: string;
  value: string;
  link?: string;
  nameTpl?: TemplateRef<any>;
  valueTpl?: TemplateRef<any>;
}
