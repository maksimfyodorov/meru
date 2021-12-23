import { INavigations } from '@app/layout/navigation/navigation.model';
import { ILabelGroups } from '@src/app/shared/http/models/database.model';

const TEAM_NAV_URL_KEY: string = 'team';
const TEAM_NAV_CHILD_URL_KEY: string = '/team/requests';
const QR_NAV_ID: string = '7';
const QR_CONF_METHOD_NAME: string = 'QR_CODE';

export function filterNavigation(navigations: INavigations, userLabelGroups: number[], labelGroups: ILabelGroups[]): INavigations {
  navigations.forEach((navigation) => {
    if (Array.isArray(navigation.children)) {
      navigation.children = navigation.children.filter(({ url }) => !url.includes(TEAM_NAV_CHILD_URL_KEY) || labelGroups.length);
    }
  });
  return navigations.filter(({ url }) => !url.includes(TEAM_NAV_URL_KEY) || userLabelGroups.length);
}

export function showHideQRNavigation(navigations: INavigations, confirmationMethod: string): INavigations {
  if (confirmationMethod !== QR_CONF_METHOD_NAME) {
    return navigations.filter((nav) => nav.id !== QR_NAV_ID);
  }
  return navigations;
}
