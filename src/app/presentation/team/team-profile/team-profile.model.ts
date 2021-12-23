import { ColorAliasType } from '@src/theme/ts/color-aslias';

export interface TeamProfileWorkplaceTableMeta {
  reservationId: number;
  floorId: number;
  placeId: number;
  building: string;
  floor: string;
  place: string;
  startDate: string;
  endDate: string;
  status: {
    value: string;
    options: { map: Record<string, { color: ColorAliasType; value: string }>};
  };
}
