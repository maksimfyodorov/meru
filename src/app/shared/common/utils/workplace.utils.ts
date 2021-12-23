export enum WorkplaceTypes {
  DEFAULT = 'Workplace',
  COMPLEMENTARY = 'Complementary workplace',
  PARKING_LOT = 'Parking place'
}

export const getTypeName = (type) => WorkplaceTypes[type] || WorkplaceTypes.DEFAULT;

export const WorkplaceTypesMap = [
  {
    value: 'DEFAULT',
    name: WorkplaceTypes.DEFAULT
  },
  {
    value: 'COMPLEMENTARY',
    name: WorkplaceTypes.COMPLEMENTARY
  },
  {
    value: 'PARKING_LOT',
    name: WorkplaceTypes.PARKING_LOT
  }
];
