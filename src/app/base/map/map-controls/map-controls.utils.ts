import { MapControl } from "./map-controls.model";

export const getControls = (): MapControl[] => [
  {
    id: 'POI',
    icon: 'info-circle',
    tooltip: 'POI',
    active: true,
    markControl: true,
  },
  {
    id: 'Users',
    icon: 'usergroup-add',
    tooltip: 'Users',
    active: true,
    markControl: true,
  },
  {
    id: 'Areas',
    icon: 'gateway',
    tooltip: 'Areas',
    active: false,
    markControl: false,
  }
];


