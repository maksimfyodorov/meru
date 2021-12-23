import { IOfficeCard } from '@base/office-card/office-card.model';

export interface IOfficesTab {
  buildId: number;
  name: string;
  items?: IOfficeCard[];
  coordinates?: {
    x: number;
    y: number;
  };
}

export interface IOfficesSequences {
  buildingsSequence?: number[];
  floorMapsSequence?: number[];
}
